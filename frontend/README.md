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
├── deploy.sh                  # AWS CLIによる自動デプロイ (将来実装)
├── frontend/                  # React (Vite) プロジェクト
│   ├── index.html             # Google Fontsの読み込み含む
│   ├── package.json
│   ├── vite.config.js
│   └── src/
│       ├── main.jsx
│       ├── App.jsx            # タブ状態管理 / 全体レイアウト
│       ├── index.css          # グローバルCSS (CSS変数 / PCBテクスチャ / LCD)
│       ├── components/
│       │   ├── Header.jsx     # タイトル + LCD時計エリア
│       │   ├── ChipRow.jsx    # 装飾チップ・抵抗・LED
│       │   ├── Tabs.jsx       # CH01〜CH04 タブ切替
│       │   ├── Screen.jsx     # ステータスバー + パネル切替
│       │   ├── CommandBar.jsx # はなす / しらべる / もちもの / れんらく
│       │   ├── Dialog.jsx     # MOTHER風ダイアログ表示エリア
│       │   ├── Footer.jsx     # コピーライト + ビルドID
│       │   ├── BoardTraces.jsx # 背景SVG回路トレース
│       │   └── panels/
│       │       ├── About.jsx
│       │       ├── Works.jsx
│       │       ├── Skills.jsx
│       │       └── Writing.jsx
│       ├── data/
│       │   ├── works.js       # WORKSデータ (4件)
│       │   └── logs.js        # WRITINGダミーデータ (5件)
│       └── hooks/             # カスタムフック (Step4以降)
└── backend/                   # Django (将来実装)
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

```bash
cd frontend
npm run build   # dist/ に出力
# S3へのデプロイは deploy.sh で実装予定
```

---

## 実装状況

### 完了

| 対象 | 内容 |
|---|---|
| グローバルCSS | CSS変数 / PCBテクスチャ / LCD / レスポンシブ対応 |
| データ層 | works.js / logs.js をモジュール化 |
| 全体レイアウト | board / board-wrap / マウントネジ / 背景SVG |
| Header | タイトル・シリアル表示・LCD枠 (時計は静的) |
| Tabs | CH01〜CH04 クリックでパネル切替 |
| Screen | ステータスバー + 各パネル表示切替 |
| About | アバター / スペックテーブル / 自己紹介文 |
| Works | WORKSリスト表示 (カード4件) |
| Skills | ABILITYメーター / 資格リスト / INVENTORY |
| Writing | LOGリスト表示 (5件) |
| CommandBar | ボタン表示のみ |
| Dialog | 表示エリアのみ (テキスト固定) |
| Footer | 表示のみ |

### 未実装 (次フェーズ)

| 対象 | 内容 |
|---|---|
| `useClock` | LCD時計・曜日・日付のリアルタイム更新 |
| `useUptime` | uptime カウントアップ |
| `useLcdMode` | ダーク / ライトモード切替 + localStorage保存 |
| `useTypewriter` | MOTHER風一文字ずつ表示アニメーション |
| CommandBar | はなす / しらべる / もちもの / れんらく の発火ロジック |
| DatasheetModal | WORKSカードクリックで開く詳細モーダル |
| LogModal | Writingリストクリックで開くログビューア |
| AboutLine | 自己紹介文の定期切替アニメーション |
| Serial / BuildID | 起動時ランダム生成 |

---

## デザインコンセプト

- **PCB基板**: ソルダーマスクの緑 × 銅箔 × シルクスクリーンの配色
- **LCDモード**: DARK (バックライト点灯) / LIGHT (反射型・カシオF-91W系) の切替
- **MOTHER2 オマージュ**: コマンドバー・ダイアログ・タイピングアニメーション
- **フォント**: DotGothic16 / Share Tech Mono / VT323 / Press Start 2P (Google Fonts)

---

## Tech Stack

| 層 | 技術 |
|---|---|
| フロントエンド | React 18 / Vite |
| スタイリング | グローバルCSS (CSS変数ベース) |
| ホスティング | AWS S3 + CloudFront (予定) |
| バックエンド | Django (将来実装予定) |

---

*HAND-SOLDERED IN TOKYO — © TASK 2026*