#!/bin/bash
# deploy.sh
# React ビルド → S3同期 → CloudFront キャッシュ削除 を一括実行するスクリプト。
#
# 事前準備:
#   - AWS CLI インストール & 認証済み (aws configure)
#   - プロジェクトルートに .env ファイルを作成 (.env.example を参照)
#
# 使い方:
#   chmod +x deploy.sh  # 初回のみ
#   ./deploy.sh          # 通常デプロイ
#   ./deploy.sh --wait   # Invalidation完了まで待つ（CI等で使う場合）

# --- 設定 ---
# スクリプト内でエラーが起きたら即座に停止する。
# これがないと npm run build が失敗してもS3同期に進んでしまう。
set -e

# --- .env 読み込み ---
if [ -f .env ]; then
  # -r: バックスラッシュエスケープを無効化
  # コメント行(#)とスペースのみの行をスキップ、export で環境変数に展開
  export $(grep -v '^\s*#' .env | grep -v '^\s*$' | xargs -r)
fi

# --- 必須変数チェック ---
# BUCKET_NAME と DISTRIBUTION_ID の両方をチェックする
MISSING=()
[ -z "$BUCKET_NAME" ]      && MISSING+=("BUCKET_NAME")
[ -z "$DISTRIBUTION_ID" ]  && MISSING+=("DISTRIBUTION_ID")

if [ ${#MISSING[@]} -gt 0 ]; then
  echo "❌ Error: 以下の変数が .env に設定されていません:"
  for v in "${MISSING[@]}"; do
    echo "   - $v"
  done
  echo ""
  echo "   .env.example を参考に .env を作成してください。"
  exit 1
fi

# --- パス設定 ---
# $0 はスクリプト自身のパス。絶対パスに変換してからプロジェクトルートを求める。
PROJECT_ROOT=$(cd "$(dirname "$0")" && pwd)
FRONTEND_DIR="$PROJECT_ROOT/frontend"

# --- オプション解析 ---
# --wait フラグが指定された場合、Invalidation完了まで待機する
WAIT_INVALIDATION=false
for arg in "$@"; do
  [ "$arg" = "--wait" ] && WAIT_INVALIDATION=true
done

# ============================================================
echo "========================================="
echo " TASK / PORTFOLIO BOARD — DEPLOY SCRIPT"
echo "========================================="
echo " BUCKET       : $BUCKET_NAME"
echo " DISTRIBUTION : $DISTRIBUTION_ID"
echo " WAIT         : $WAIT_INVALIDATION"
echo "-----------------------------------------"

# --- STEP 1: React ビルド ---
echo ""
echo "📦 [1/3] Reactビルドを開始します..."
cd "$FRONTEND_DIR"
npm run build
echo "✅ ビルド完了 → dist/"

# --- STEP 2: S3 同期 ---
echo ""
echo "🚀 [2/3] S3へ同期します..."
# --delete : S3側にあってdist/に無いファイルを削除（古いファイルの残留防止）
# --region : ap-northeast-1 固定（東京リージョン）
aws s3 sync "$FRONTEND_DIR/dist" "s3://$BUCKET_NAME" \
  --delete \
  --region ap-northeast-1
echo "✅ S3同期完了"

# --- STEP 3: CloudFront キャッシュ削除 ---
echo ""
echo "🧹 [3/3] CloudFrontキャッシュを削除します..."
INVALIDATION_ID=$(
  aws cloudfront create-invalidation \
    --distribution-id "$DISTRIBUTION_ID" \
    --paths "/*" \
    --query 'Invalidation.Id' \
    --output text
)
echo "✅ Invalidation作成完了 (ID: $INVALIDATION_ID)"

# --wait が指定されている場合はキャッシュ削除の完了まで待機
# 通常2〜5分かかる。CI/CDで「デプロイ後すぐ確認したい」場合に使う。
if [ "$WAIT_INVALIDATION" = true ]; then
  echo ""
  echo "⏳ Invalidation完了を待っています (最大5分程度)..."
  aws cloudfront wait invalidation-completed \
    --distribution-id "$DISTRIBUTION_ID" \
    --id "$INVALIDATION_ID"
  echo "✅ Invalidation完了"
fi

# --- 完了 ---
echo ""
echo "========================================="
echo "✅ デプロイ完了！"
echo "   反映まで数分かかる場合があります。"
echo "   (--wait なしの場合はキャッシュ削除が進行中)"
echo "========================================="