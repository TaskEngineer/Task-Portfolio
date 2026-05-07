// WORKS データ。元HTMLの WORKS 配列をそのまま JS モジュール化したもの。
// ic / shot は SVG 文字列なのでテンプレートリテラルで保持し、
// React 側では dangerouslySetInnerHTML で描画します(信頼できる自前データなので可)。
export const WORKS = [
    {
      id: "rcgear",
      pn: "TSK-WRK-001",
      rev: "REV.B / SHEET 1/1",
      title: "RCカー ギア比 計算アプリ",
      sub: "ANDROID NATIVE / KOTLIN",
      desc: "ピニオンとスパーから最終減速比・最高速・トルクの目安を算出するAndroidアプリ。サーキットで「持ち替えるべきか」を秒で判断するために作りました。",
      about: "実車のセッティング書き込みが面倒で、走行直後の指で叩ける入力に最適化しました。プリセット保存とモーター/バッテリーの想定値からの簡易シミュレーション付き。",
      meta: "PLATFORM: ANDROID / STACK: Kotlin · Jetpack Compose / STATUS: 個人利用中",
      pins: [
        ["1", "INPUT  : ピニオン T 数 (8〜30)"],
        ["2", "INPUT  : スパー T 数 (60〜120)"],
        ["3", "INPUT  : モーター KV"],
        ["4", "OUTPUT : 最終減速比"],
        ["5", "OUTPUT : 想定最高速 km/h"],
        ["6", "OUTPUT : 想定トルク 比"],
        ["7", "MEM    : プリセット保存"],
        ["8", "GND    : 設定リセット"],
      ],
      tags: ["ANDROID", "KOTLIN", "COMPOSE", "TOOL", "実用"],
      dummy: false,
      ic: '<rect x="2" y="6" width="12" height="6" fill="#c9a96a"/><rect x="4" y="4" width="8" height="2" fill="#c9a96a"/><circle cx="5" cy="13" r="2" fill="#1b2415"/><circle cx="11" cy="13" r="2" fill="#1b2415"/><rect x="6" y="7" width="4" height="2" fill="#1b2415"/>',
      shot: `
        <svg viewBox="0 0 60 80" shape-rendering="crispEdges">
          <rect width="60" height="80" fill="#1b2415"/>
          <rect x="4" y="6" width="52" height="8" fill="#c9a96a"/>
          <text x="30" y="12" font-family="monospace" font-size="4" fill="#1b2415" text-anchor="middle">RC GEAR CALC</text>
          <rect x="4" y="18" width="24" height="14" fill="#6f8259"/>
          <text x="16" y="27" font-family="monospace" font-size="6" fill="#1b2415" text-anchor="middle">P:24</text>
          <rect x="32" y="18" width="24" height="14" fill="#6f8259"/>
          <text x="44" y="27" font-family="monospace" font-size="6" fill="#1b2415" text-anchor="middle">S:88</text>
          <rect x="4" y="36" width="52" height="20" fill="#0e2a22" stroke="#c9a96a"/>
          <text x="30" y="44" font-family="monospace" font-size="4" fill="#c9a96a" text-anchor="middle">FINAL RATIO</text>
          <text x="30" y="54" font-family="monospace" font-size="9" fill="#7fae5a" text-anchor="middle">3.67</text>
          <rect x="4" y="60" width="24" height="14" fill="#c9a96a"/>
          <text x="16" y="69" font-family="monospace" font-size="4" fill="#1b2415" text-anchor="middle">SAVE</text>
          <rect x="32" y="60" width="24" height="14" fill="#3a5a3a"/>
          <text x="44" y="69" font-family="monospace" font-size="4" fill="#e8dcc4" text-anchor="middle">CALC</text>
        </svg>`,
    },
    {
      id: "faqbot",
      pn: "TSK-WRK-002",
      rev: "REV.A / SHEET 1/1",
      title: "社内ヘルプデスクFAQ ボット",
      sub: "INTERNAL TOOL / RAG ON SLACK",
      desc: "過去のチケットをベクトル化し、Slack上で類似事例を返すRAGボット。「同じ質問が3回来たら自動化する」ルールから生まれた1号機。",
      about: "サービスデスク時代のチケット約2万件を埋め込み、Slackで質問に対し類似Top3を提案。最終回答は人間が出すハイブリッド運用で、誤答リスクを下げています。",
      meta: "STACK: Python / LangChain / Pinecone / STATUS: 設計支援中",
      pins: [
        ["1", "IN  : Slack mention"],
        ["2", "VEC : OpenAI text-embedding"],
        ["3", "DB  : Pinecone (Top-K=3)"],
        ["4", "OUT : Slack thread reply"],
        ["5", "LOG : DynamoDB"],
        ["6", "OPS : 月次再インデックス"],
      ],
      tags: ["PYTHON", "RAG", "SLACK", "AWS", "DUMMY"],
      dummy: true,
      ic: '<rect x="2" y="3" width="12" height="10" fill="#1b2415" stroke="#c9a96a"/><rect x="3" y="4" width="10" height="1" fill="#c9a96a"/><rect x="3" y="6" width="6" height="1" fill="#c9a96a"/><rect x="3" y="8" width="8" height="1" fill="#c9a96a"/><rect x="3" y="10" width="4" height="1" fill="#c9a96a"/>',
      shot: `
        <svg viewBox="0 0 60 80" shape-rendering="crispEdges">
          <rect width="60" height="80" fill="#1b2415"/>
          <rect x="4" y="4" width="52" height="6" fill="#3a5a3a"/>
          <text x="30" y="9" font-family="monospace" font-size="4" fill="#e8dcc4" text-anchor="middle">#help-desk</text>
          <rect x="4" y="14" width="40" height="10" fill="#6f8259"/>
          <text x="6" y="20" font-family="monospace" font-size="4" fill="#1b2415">Q: VPN繋がらない</text>
          <rect x="16" y="28" width="40" height="14" fill="#c9a96a"/>
          <text x="18" y="34" font-family="monospace" font-size="3" fill="#1b2415">A: 類似ケース 3件</text>
          <text x="18" y="38" font-family="monospace" font-size="3" fill="#1b2415">#1234 / #1108 ...</text>
          <rect x="16" y="46" width="40" height="14" fill="#c9a96a"/>
          <text x="18" y="52" font-family="monospace" font-size="3" fill="#1b2415">手順 1: 切替確認</text>
          <text x="18" y="56" font-family="monospace" font-size="3" fill="#1b2415">手順 2: 再認証</text>
          <rect x="4" y="64" width="52" height="10" fill="#0e2a22" stroke="#c9a96a"/>
          <text x="30" y="71" font-family="monospace" font-size="4" fill="#7fae5a" text-anchor="middle">RESOLVED ✓</text>
        </svg>`,
    },
    {
      id: "awscost",
      pn: "TSK-WRK-003",
      rev: "REV.C / SHEET 1/1",
      title: "AWS 月次コスト 通知ブックマークレット",
      sub: "BOOKMARKLET / VANILLA JS",
      desc: "Cost Explorerを開くたびにフィルタを設定するのが面倒で書いた、ワンクリック整形ツール。JavaScript入門としての記念碑。",
      about: "ブックマークバーから1クリックで、当月コスト・前月比・上位サービスを抽出してコピー可能な形に整形。JS初心者の最初の「動いた!」の記録でもあります。",
      meta: "STACK: JavaScript Bookmarklet / STATUS: 公開中",
      pins: [
        ["1", "TRIG: Bookmarklet click"],
        ["2", "DOM : Cost Explorer DOM"],
        ["3", "FMT : Markdown table"],
        ["4", "OUT : Clipboard"],
        ["5", "LOG : console.table"],
      ],
      tags: ["JAVASCRIPT", "AWS", "COST", "DUMMY"],
      dummy: true,
      ic: '<rect x="3" y="2" width="10" height="2" fill="#c9a96a"/><rect x="2" y="4" width="12" height="8" fill="#1b2415" stroke="#c9a96a"/><rect x="4" y="6" width="2" height="2" fill="#7fae5a"/><rect x="7" y="6" width="2" height="2" fill="#d96b4a"/><rect x="10" y="6" width="2" height="2" fill="#c9a96a"/><rect x="4" y="9" width="8" height="2" fill="#c9a96a"/>',
      shot: `
        <svg viewBox="0 0 60 80" shape-rendering="crispEdges">
          <rect width="60" height="80" fill="#1b2415"/>
          <rect x="4" y="4" width="52" height="6" fill="#c9a96a"/>
          <text x="30" y="9" font-family="monospace" font-size="4" fill="#1b2415" text-anchor="middle">AWS COST 2026/04</text>
          <rect x="4" y="14" width="52" height="36" fill="#0e2a22" stroke="#c9a96a"/>
          <text x="6" y="20" font-family="monospace" font-size="3" fill="#7fae5a">EC2     $ 312.40</text>
          <text x="6" y="26" font-family="monospace" font-size="3" fill="#7fae5a">S3      $  88.10</text>
          <text x="6" y="32" font-family="monospace" font-size="3" fill="#7fae5a">Lambda  $  12.30</text>
          <text x="6" y="38" font-family="monospace" font-size="3" fill="#d96b4a">RDS     $ 540.80 ▲</text>
          <text x="6" y="46" font-family="monospace" font-size="3" fill="#e8dcc4">TOTAL   $ 953.60</text>
          <rect x="4" y="54" width="52" height="20" fill="#3a5a3a"/>
          <text x="30" y="62" font-family="monospace" font-size="4" fill="#e8dcc4" text-anchor="middle">[ COPY MD ]</text>
          <text x="30" y="70" font-family="monospace" font-size="3" fill="#c9a96a" text-anchor="middle">前月比 +18%</text>
        </svg>`,
    },
    {
      id: "thissite",
      pn: "TSK-WRK-000",
      rev: "REV.A / SHEET 1/1",
      title: "このポートフォリオ基板",
      sub: "STATIC SITE / React · Vite · Django",
      desc: "HTML/CSS/JSの練習台にしているサイト本体。チプカシとPCBとMOTHER2を一枚に押し込めようとした結果、こうなりました。",
      about: "構成はフロントエンドをReactとViteで作成。バックエンドはDjangoで作成（予定）。読みながら『ここはこうしたい』を反映していく、生きている基板です。",
      meta: "STACK: React / Vite / Django / STATUS: あなたが今みているもの",
      pins: [
        ["1", "VCC : インスピレーション"],
        ["2", "GND : はんだ付けの根気"],
        ["3", "TX  : ABOUT / WORKS / SKILLS / WRITING"],
        ["4", "RX  : ユーザの コメント"],
        ["5", "CLK : RTC (今を 表示)"],
        ["6", "RST : LCD MODE"],
      ],
      tags: ["HTML", "CSS", "JS", "PCB", "MOTHER", "CASIO"],
      dummy: false,
      ic: '<circle cx="8" cy="8" r="6" fill="none" stroke="#c9a96a" stroke-width="1.2"/><rect x="7" y="3" width="2" height="5" fill="#c9a96a"/><rect x="8" y="7" width="4" height="2" fill="#c9a96a"/><circle cx="8" cy="8" r="1" fill="#1b2415"/>',
      shot: `
        <svg viewBox="0 0 60 80" shape-rendering="crispEdges">
          <rect width="60" height="80" fill="#0e2a22"/>
          <g stroke="#c9a96a" stroke-width=".4" fill="none" opacity=".7">
            <path d="M2 8 L20 8 L24 12 L58 12"/>
            <path d="M2 16 L14 16 L18 20 L40 20"/>
            <path d="M2 70 L30 70 L34 66 L58 66"/>
          </g>
          <rect x="6" y="24" width="48" height="32" fill="#6f8259" stroke="#1c2415"/>
          <text x="30" y="32" font-family="monospace" font-size="3" fill="#1b2415" text-anchor="middle">TASK / PORTFOLIO</text>
          <rect x="8" y="36" width="10" height="6" fill="#c9a96a"/>
          <rect x="20" y="36" width="10" height="6" fill="#3a5a3a"/>
          <rect x="32" y="36" width="10" height="6" fill="#3a5a3a"/>
          <rect x="44" y="36" width="8" height="6" fill="#3a5a3a"/>
          <text x="30" y="50" font-family="monospace" font-size="5" fill="#1b2415" text-anchor="middle">21:04:33</text>
          <circle cx="6" cy="6" r="1.5" fill="#c9a96a"/>
          <circle cx="54" cy="6" r="1.5" fill="#c9a96a"/>
          <circle cx="6" cy="74" r="1.5" fill="#c9a96a"/>
          <circle cx="54" cy="74" r="1.5" fill="#c9a96a"/>
        </svg>`,
    },
  ];