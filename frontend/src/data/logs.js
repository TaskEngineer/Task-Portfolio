// frontend/src/data/logs.js
// Step6: body フィールドを追加。Markdown文字列で記事本文を保持する。
// 後方互換: body がない場合は excerpt がフォールバックで表示される。
export const LOGS = [
  {
    id: "log-005", pn: "TSK-LOG-005", date: "2026.03.02", read: 5, dummy: true,
    title: "AWS SAP に受かったのに、設計レビューで毎回ボコボコにされる話",
    sub: "AWS / 設計レビュー",
    tags: ["AWS", "ARCHITECTURE", "DUMMY"],
    excerpt: "資格は読図ができる証明であって、実地の地図を描ける証明ではなかった。\nレビューで指摘されるのは、いつも『要件のほうの解像度』だ。",
    // body 未指定 → モーダルでは excerpt がフォールバック表示される
  },
  {
    id: "log-004", pn: "TSK-LOG-004", date: "2026.01.18", read: 3, dummy: true,
    title: "RCカーのギア比を手計算で管理していたが、ついに観念した話",
    sub: "個人開発 / Android",
    tags: ["RC", "ANDROID", "PERSONAL", "DUMMY"],
    excerpt: "コース脇でAndroidからいちいちググるのは、もう やめにしたい。\n指で叩ける UI を作ってみた。",
  },
  {
    id: "log-003", pn: "TSK-LOG-003", date: "2025.11.30", read: 4, dummy: true,
    title: "「とりあえず再起動」をやめるための、最小限のログ確認順序",
    sub: "TROUBLESHOOTING / 切り分け",
    tags: ["NETWORK", "OPS", "DUMMY"],
    excerpt: "再起動は最後の手段ではない。最後の『情報を消す』手段だ。\n再起動の前に見るべき場所が3つだけある、という話。",
  },
  {
    // ★ サンプルとして1件だけ LIVE にする ★
    id: "log-002", pn: "TSK-LOG-002", date: "2025.10.05", read: 3, dummy: false,
    title: "初心者がブックマークレットでJSに入門するのは、わりと正解だった",
    sub: "JAVASCRIPT / 入門",
    tags: ["JS", "BEGINNER"],
    excerpt: "環境構築ゼロ、即フィードバック、業務に効く。\n入門書より、目の前の面倒を1つ消すほうが続いた。",
    // Markdown 本文。テンプレートリテラル(` `)で複数行を保持。
    body: `
## なぜブックマークレットだったか

JS入門の最初の一歩として、書籍を1冊買って\`Hello World\`から始めた。
**結論からいうと、3日で挫折した。**

理由は単純で、

- ローカルに環境を作る作業で力尽きる
- 書いたコードが目の前の役に立たない
- フィードバックが遅い

の3つだった。

## 転機: 業務でちょっと困った

サービスデスク時代、Slackに貼られたチケット番号から
基幹システムのリンクを毎回手作業で組み立てていた。
URLは規則的だったので「これ自動化できるのでは」と思った。

そこで書いたのがこれ:

\`\`\`javascript
javascript:(() => {
  const t = window.getSelection().toString().trim();
  if (!t) return alert('チケット番号を選択してください');
  window.open('https://internal.example.com/ticket/' + t, '_blank');
})();
\`\`\`

選択したテキストをURLに差し込んで開くだけ。20行未満。
ブックマークバーにドラッグして登録するだけで使える。

## 続いた理由

ブックマークレットは「環境ゼロ」「即フィードバック」「業務直結」が揃っている。
入門書を読み切るより、**目の前の面倒を1つ消す**ほうが、自分にはずっと続いた。

> 入門は「やる気を出す」より、「めんどくさいを消す」ほうが燃料になる。

これが今でも個人的な学習方針になっている。
`,
  },
  {
    id: "log-001", pn: "TSK-LOG-001", date: "2025.08.22", read: 6, dummy: true,
    title: "E資格の勉強で一番よかった副作用は、ドキュメントを怖がらなくなったこと",
    sub: "E資格 / 学習ログ",
    tags: ["ML", "STUDY", "DUMMY"],
    excerpt: "数式を読む筋肉がつくと、英語の README も同じ顔つきに見えてくる。\n知識そのものより、『怖がらない態度』のほうが財産だった。",
  },
];