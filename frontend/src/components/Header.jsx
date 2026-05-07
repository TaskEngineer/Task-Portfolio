export default function Header() {
    return (
      <header className="header">
        <div className="silk-title">
          <span className="pn">
            MODEL: TSK-PCB-01 &nbsp;/&nbsp; REV.A &nbsp;/&nbsp;{' '}
            <span id="serial">SN-000000</span>
          </span>
          <span className="big">TASK / PORTFOLIO BOARD</span>
          <span className="small">
            サービスデスク 5年。トラブルシューティングと業務自動化が好きなエンジニアの、ささやかな展示基板です。
          </span>
        </div>
  
        <div className="lcd-cluster">
          <div className="lcd lcd-clock">
            <div className="lcd-label">JST &nbsp; ALM ●○ &nbsp; CHM ●○</div>
            {/* data-ghost で 88:88:88 のうっすらゴースト表示。次回フックで時刻更新 */}
            <div className="seg" id="clock" data-ghost="88:88:88">
              --:--:--
            </div>
            <div className="lcd-meta">
              <span id="dow">---</span>
              <span id="date">--/--</span>
            </div>
          </div>
          <button className="lcd-mode-btn" id="modeBtn" title="LCD LIGHT / DARK">
            <span className="ic" id="modeIc">◐</span>
            <span id="modeLbl">LIGHT</span>
          </button>
        </div>
      </header>
    );
  }