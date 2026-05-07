# TASK / PORTFOLIO BOARD v1.0

> PCB基板 × チプカシ × MOTHER2 をテーマにしたポートフォリオサイト。
> サービスデスク出身・業務自動化見習いエンジニアの、ささやかな展示基板。

---

## 構成

```text
task-portfolio/
├── .git/
├── .gitignore
├── README.md
├── .env.example                    # 環境変数テンプレート (Step7)
├── deploy.sh                       # AWS CLIによる自動デプロイ (Step7で整備済み)
├── frontend/                       # React (Vite) プロジェクト
│   ├── index.html
│   ├── package.json                # react-markdown / remark-gfm を追加
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx                 # タブ/モーダル/Dialog状態の集約
│       ├── index.css               # グローバルCSS + .log-md (Markdown描画用)
│       ├── components/
│       │   ├── Header.jsx          # タイトル + LCD時計 + LCDモード切替 (SVGアイコン)
│       │   ├── ChipRow.jsx
│       │   ├── Tabs.jsx
│       │   ├── Screen.jsx
│       │   ├── CommandBar.jsx
│       │   ├── Dialog.jsx
│       │   ├── DatasheetModal.jsx  # WORKS詳細モーダル (フォーカストラップ対応)
│       │   ├── LogModal.jsx        # WRITING詳細モーダル (Markdown描画対応)
│       │   ├── Footer.jsx
│       │   ├── BoardTraces.jsx
│       │   └── panels/
│       │       ├── About.jsx       # AboutLine 定期切替
│       │       ├── Works.jsx
│       │       ├── Skills.jsx
│       │       └── Writing.jsx
│       ├── data/
│       │   ├── works.js
│       │   └── logs.js             # body フィールド追加 (1件LIVE)
│       └── hooks/
│           ├── useClock.js
│           ├── useUptime.js
│           ├── useLcdMode.js
│           ├── useTypewriter.js
│           ├── useRandomId.js
│           └── useFocusTrap.js
└── backend/                        # Django (将来実装)
    └── requirements.txt
```

---

## セットアップ

```bash
cd frontend
npm install
npm run dev
```

ブラウザで `http://localhost:5173` を開く。

---

## ビルド & デプロイ

### ローカルビルドのみ

```bash
cd frontend
npm run build   # dist/ に出力
```

### S3 + CloudFront へデプロイ

```bash
# 1. 初回のみ: .env を作成
cp .env.example .env
# BUCKET_NAME と DISTRIBUTION_ID を .env に記入

# 2. 実行権限付与 (初回のみ)
chmod +x deploy.sh

# 3. デプロイ実行
./deploy.sh

# 4. Invalidation完了まで待ちたい場合 (CI等)
./deploy.sh --wait
```

---

## CloudFront SPA対応 (初回のみ)

SPAはすべてのパスを `/index.html` で受ける必要がある。
S3に存在しないパスへの直接アクセス・リロード時に403/404が返らないよう、
CloudFront のカスタムエラーページを以下のように設定する。

```
AWSコンソール → CloudFront → 対象ディストリビューション
→ [エラーページ] タブ → [カスタムエラーレスポンスを作成]

設定値 (403 / 404 それぞれ同じ内容で作成):
  HTTPエラーコード         : 403 (または 404)
  TTL (キャッシュ保持時間) : 0
  レスポンスページのパス   : /index.html
  HTTPレスポンスコード     : 200
```

> TTLを0にする理由: エラーページをキャッシュすると、正常ページに変わった後も古いレスポンスが返り続けるリスクがある。

---

## 実装状況

### 完了

| Step | 対象 | 内容 |
|---|---|---|
| 1 | グローバルCSS | CSS変数 / PCBテクスチャ / LCD / レスポンシブ対応 |
| 1 | データ層 | works.js / logs.js をモジュール化 |
| 2 | 全体レイアウト | board / board-wrap / マウントネジ / 背景SVG |
| 2 | Header | タイトル・シリアル表示・LCD枠 |
| 2 | Tabs | CH01〜CH04 クリックでパネル切替 |
| 2 | Screen | ステータスバー + 各パネル表示切替 |
| 3 | About | アバター / スペックテーブル / 自己紹介文 |
| 3 | Works | WORKSリスト表示 (カード4件) |
| 3 | Skills | ABILITYメーター / 資格リスト / INVENTORY |
| 3 | Writing | LOGリスト表示 (5件) |
| 3 | Footer | コピーライト + ビルドID表示 |
| 4 | `useClock` | LCD時計・曜日・日付のリアルタイム更新 |
| 4 | `useUptime` | uptime カウントアップ |
| 4 | `useLcdMode` | ダーク / ライトモード切替 + localStorage保存 |
| 4 | `useTypewriter` | MOTHER風一文字ずつ表示アニメーション |
| 5 | CommandBar | はなす / しらべる / もちもの / れんらく の発火ロジック |
| 5 | Dialog | CommandBar からの text を受けてタイプライタ再生 |
| 5 | DatasheetModal | WORKSカードクリックで開く詳細モーダル (ESC / オーバーレイで閉) |
| 5 | LogModal | Writingリストクリックで開くログビューア (ESC / オーバーレイで閉) |
| 5 | App | モーダル/Dialog状態を集約 (selectedWork / selectedLog / dialogText) |
| 5 | `useRandomId` / Serial / BuildID | 起動時にランダム生成して Header / Footer に表示 |
| 6 | AboutLine | 自己紹介文の定期切替 (8秒ごと) + タイプライタ表示 |
| 6 | `useFocusTrap` | モーダル内のTabフォーカスを閉じ込め、閉時は呼び出し元へ復帰 |
| 6 | DatasheetModal / LogModal | `useFocusTrap` を組み込みアクセシビリティ強化 |
| 6 | Header (icon) | LCDモード切替ボタンのアイコンをSVG化 (Unicode依存を排除) |
| 6 | Header (a11y) | LCDモードボタンに aria-label を付与 |
| 6 | Dialog (typewriter) | `useTypewriter` の引数をオブジェクト形式に統一 |
| 6 | LogModal (Markdown) | `react-markdown` + `remark-gfm` で本文をMarkdown描画 |
| 6 | logs.js (body field) | `body` フィールド追加。`excerpt` フォールバック対応 |
| 6 | 読了分数の自動算出 | 本文文字数から推計 (約500字/分) |
| 6 | `.log-md` CSS | 見出し / リスト / 引用 / コード / テーブル等のスタイル定義 |
| **7** | **deploy.sh 堅牢化** | **`set -e` でビルド失敗時に停止 / `DISTRIBUTION_ID` チェック追加 / `--wait` オプション** |
| **7** | **`.env.example`** | **`BUCKET_NAME` / `DISTRIBUTION_ID` のテンプレートをコミット** |
| **7** | **CloudFront SPA対応** | **403/404 → `/index.html` (200) のカスタムエラーページ設定をREADMEにドキュメント化** |

### 未実装 (次フェーズ)

| 対象 | 内容 |
|---|---|
| Backend (Django) | 問い合わせフォーム / LOGのCMS化 |
| れんらく本実装 | 本物のメールアドレス・GitHubリンク差し込み |
| LOGの記事本数追加 | 残り4件をダミーから本物へ |
| GitHub Actions | push時に自動ビルド & デプロイ |
| シンタックスハイライト | コードブロックに highlight.js or shiki を導入 |

---

## デザインコンセプト

- **PCB基板**: ソルダーマスクの緑 × 銅箔 × シルクスクリーンの配色
- **LCDモード**: DARK (バックライト点灯) / LIGHT (反射型・カシオF-91W系) の切替
- **MOTHER2 オマージュ**: コマンドバー・ダイアログ・タイピングアニメーション
- **フォント**: DotGothic16 / Share Tech Mono / VT323 / Press Start 2P (Google Fonts)

---

## アクセシビリティ

- LCDモード切替ボタンに `aria-label` を付与
- モーダルは `role="dialog"` + `aria-modal="true"` + フォーカストラップ
- ESCキー / オーバーレイクリックでモーダルを閉じられる
- WRITINGの行は `role="button"` + `tabIndex=0` でキーボードからも開ける

---

## Markdown記法 (LOG本文)

`logs.js` の `body` フィールドにMarkdown文字列を入れる。対応記法 (GFM準拠):
見出し (`##`, `###`) / 強調 (`**bold**`) / リスト / インライン・ブロックコード / 引用 (`>`) / テーブル / URL自動リンク

---

## Tech Stack

| 層 | 技術 |
|---|---|
| フロントエンド | React 18 / Vite |
| Markdown描画 | react-markdown / remark-gfm |
| スタイリング | グローバルCSS (CSS変数ベース) |
| 状態管理 | React useState / useEffect / useRef |
| ホスティング | AWS S3 + CloudFront |
| バックエンド | Django (将来実装予定) |

---

*HAND-SOLDERED IN TOKYO — © TASK 2026*