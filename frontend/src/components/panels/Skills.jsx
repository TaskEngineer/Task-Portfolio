// メーター項目は配列で持たせると将来編集しやすい
const SKILLS = [
    { name: 'NW / TROUBLESHOOTING', pct: 88 },
    { name: 'AWS / CLOUD INFRA',     pct: 78 },
    { name: 'AI / LITERACY',          pct: 65 },
    { name: '業務自動化 設計',        pct: 55 },
    { name: 'PYTHON',                pct: 42 },
    { name: 'JAVASCRIPT',            pct: 28 },
    { name: 'HTML / CSS',            pct: 15 },
    { name: 'ドキュメンテーション',    pct: 50 },
  ];
  
  const CERTS = [
    '基本情報技術者 (FE)',
    'ネットワークスペシャリスト (NW)',
    'AWS Solutions Architect Professional',
    'E資格 (JDLA Deep Learning for Engineer)',
    'CCNA',
    'LinuC Lv.1',
  ];
  
  export default function Skills() {
    return (
      <div className="panel active" data-panel="skills">
        <div className="section-h">▼ ABILITY METER / のうりょくメーター</div>
        <div className="skills-grid">
          {SKILLS.map((s) => (
            <div className="skill" key={s.name}>
              <div className="name">
                <span>{s.name}</span>
                <span className="pct">{s.pct}%</span>
              </div>
              {/* CSS変数 --w でメーター幅を可変。Reactでは style に直接書く */}
              <div className="meter" style={{ '--w': `${s.pct}%` }} />
            </div>
          ))}
        </div>
  
        <div className="section-h">▼ CERTIFICATION / しょじひん:しかく</div>
        <ul className="cert-list">
          {CERTS.map((c) => (
            <li key={c}>{c}</li>
          ))}
        </ul>
  
        <div className="section-h">▼ INVENTORY / もちもの</div>
        <table className="spec-table">
          <tbody>
            <tr><th>言語</th><td>Python (主) / JavaScript (覚えたて) / Bash / Kotlin</td></tr>
            <tr><th>クラウド</th><td>AWS (EC2, Lambda, IAM, VPC, CloudWatch, Cost Explorer 他)</td></tr>
            <tr><th>ツール</th><td>GitHub / Cursor / Claude Code / Wireshark / Slack Workflow</td></tr>
            <tr><th>趣味の道具</th><td>RCカー / チプカシF-91W / ロードバイク</td></tr>
          </tbody>
        </table>
      </div>
    );
  }