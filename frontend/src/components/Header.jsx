// frontend/src/components/Header.jsx
import useClock from '../hooks/useClock.js';
import useLcdMode from '../hooks/useLcdMode.js';
import useRandomId from '../hooks/useRandomId.js';

export default function Header() {
    const { time, dow, date } = useClock();
    const [mode, toggleMode] = useLcdMode();
    // SN-XXXXXX のXXXXXX部分を6桁数字でランダム生成
    const serial = useRandomId({ length: 6, prefix: 'SN-' });
  
    // ボタンラベルは「現在モードと逆」を表示する設計
    // (今dark なら "LIGHT" と書いてあるボタンを押す)
    const nextLabel = mode === 'dark' ? 'LIGHT' : 'DARK';
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
          >
            <span className="ic" id="modeIc">◐</span>
            <span id="modeLbl">{nextLabel}</span>
          </button>
        </div>
      </header>
    );
  }