#!/bin/bash

# .env ファイルがあれば読み込む
if [ -f .env ]; then
  export $(grep -v '^#' .env | xargs)
fi

# 変数が空の場合のチェック
if [ -z "$BUCKET_NAME" ]; then
    echo "❌ Error: BUCKET_NAME is not set in .env"
    exit 1
fi

# 絶対パスの設定
PROJECT_ROOT=$(cd $(dirname $0); pwd)
FRONTEND_DIR="$PROJECT_ROOT/frontend"

# 1. Reactのビルド
echo "📦 Reactのビルドを開始します..."
cd $FRONTEND_DIR
npm run build

# 2. S3へ同期 (差分のみアップロード & 不要なファイルを削除)
echo "🚀 S3への同期を開始します..."
aws s3 sync $FRONTEND_DIR/dist s3://$BUCKET_NAME --delete --region ap-northeast-1

# 3. CloudFrontのキャッシュ削除 (これ重要！)
echo "🧹 キャッシュをクリアしています..."
INVALIDATION_ID=$(aws cloudfront create-invalidation --distribution-id $DISTRIBUTION_ID --paths "/*" --query 'Invalidation.Id' --output text)

echo "✅ デプロイ完了！ (Invalidation ID: $INVALIDATION_ID)"
echo "反映まで数分かかる場合があります。"