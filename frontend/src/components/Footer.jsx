// frontend/src/components/Footer.jsx
import useUptime from '../hooks/useUptime.js';
import useRandomId from '../hooks/useRandomId.js';

export default function Footer() {
    const upTime = useUptime();
    // BUILD は16進数4桁で(らしさ重視)
    const buildId = useRandomId({ length: 4, charset: 'hex' });

    return (
      <footer className="footer">
        <span>
          © <span className="copper">TASK</span> / 2026 / HAND-SOLDERED IN TOKYO
        </span>
        <span>
          BUILD <span className="copper" id="buildId">{buildId}</span> &nbsp;·&nbsp;{' '}
          <span id="upTime">{upTime}</span>
        </span>
      </footer>
    );
  }