export default function Footer() {
    return (
      <footer className="footer">
        <span>
          © <span className="copper">TASK</span> / 2026 / HAND-SOLDERED IN TOKYO
        </span>
        <span>
          BUILD <span className="copper" id="buildId">0000</span> &nbsp;·&nbsp;{' '}
          <span id="upTime">UPTIME 00:00</span>
        </span>
      </footer>
    );
  }