// frontend/src/components/Header.jsx
// Step6: 定義済みだったが未使用だった `icon` を実際にJSXで使う
import useClock from '../hooks/useClock.js';
import useLcdMode from '../hooks/useLcdMode.js';
import useRandomId from '../hooks/useRandomId.js';

export default function Header() {
  const { time, dow, date } = useClock();
  const [mode, toggleMode] = useLcdMode();
  const serial = useRandomId({ length: 6, prefix: 'SN-' });

  const nextLabel = mode === 'dark' ? 'LIGHT' : 'DARK';
  // 現在モードに応じてアイコンを切替
  // ◐ = dark状態 (左半分黒) / ◑ = light状態 (右半分黒)
  const icon = mode === 'dark' ? '◐' : '◑';

  return (
    <header className="header">
      <div className="silk-title">
        <span className="pn">
          MODEL: TSK-PCB-01 &nbsp;/&nbsp; REV.A &nbsp;/&nbsp;{' '}
          <span id="serial">{serial}</span>
        </span>
        <span className="big">TASK / PORTFOLIO BOARD</span>
        <span className="small">
          サービスデスク 5年。トラブルシューティングと業務自動化が好きなエンジニアの、ささやかな展示基板です。
        </span>
      </div>

      <div className="lcd-cluster">
        <div className="lcd lcd-clock">
          <div className="lcd-label">JST &nbsp; ALM ●○ &nbsp; CHM ●○</div>
          <div className="seg" id="clock" data-ghost="88:88:88">
            {time}
          </div>
          <div className="lcd-meta">
            <span id="dow">{dow}</span>
            <span id="date">{date}</span>
          </div>
        </div>
        <button
          className="lcd-mode-btn"
          id="modeBtn"
          title="LCD LIGHT / DARK"
          onClick={toggleMode}
          aria-label={`LCDモードを ${nextLabel} に切替`}
        >
          {/* ハードコードだった "◐" を icon 変数に差し替え */}
          <span className="ic" id="modeIc">{icon}</span>
          <span id="modeLbl">{nextLabel}</span>
        </button>
      </div>
    </header>
  );
}