// 基板背景の回路トレースSVG。元HTMLの内容をJSX化したのみ。
// class → className, viewBox等のキャメルケースは元から正しい形なのでそのまま。
export default function BoardTraces() {
    return (
      <svg
        className="traces"
        viewBox="0 0 1200 900"
        preserveAspectRatio="none"
        aria-hidden="true"
      >
        <defs>
          <pattern id="padGrid" x="0" y="0" width="24" height="24" patternUnits="userSpaceOnUse">
            <circle cx="12" cy="12" r="1" fill="var(--copper-dim)" opacity=".22" />
          </pattern>
          <symbol id="ic" viewBox="0 0 60 30">
            <rect x="2" y="6" width="56" height="18" fill="none" stroke="var(--copper-dim)" strokeWidth=".6" opacity=".55" />
            <g fill="var(--copper)" opacity=".55">
              <rect x="6" y="0" width="3" height="6" /><rect x="14" y="0" width="3" height="6" />
              <rect x="22" y="0" width="3" height="6" /><rect x="30" y="0" width="3" height="6" />
              <rect x="38" y="0" width="3" height="6" /><rect x="46" y="0" width="3" height="6" />
              <rect x="6" y="24" width="3" height="6" /><rect x="14" y="24" width="3" height="6" />
              <rect x="22" y="24" width="3" height="6" /><rect x="30" y="24" width="3" height="6" />
              <rect x="38" y="24" width="3" height="6" /><rect x="46" y="24" width="3" height="6" />
            </g>
            <circle cx="8" cy="11" r="1.2" fill="var(--copper-dim)" opacity=".7" />
          </symbol>
          <symbol id="bus" viewBox="0 0 80 12">
            <g fill="none" stroke="var(--copper)" strokeWidth=".8" opacity=".5">
              <line x1="0" y1="2" x2="80" y2="2" />
              <line x1="0" y1="4" x2="80" y2="4" />
              <line x1="0" y1="6" x2="80" y2="6" />
              <line x1="0" y1="8" x2="80" y2="8" />
              <line x1="0" y1="10" x2="80" y2="10" />
            </g>
          </symbol>
          <symbol id="smdRow" viewBox="0 0 60 6">
            <g fill="var(--copper)" opacity=".55">
              <rect x="0" y="0" width="4" height="6" /><rect x="8" y="0" width="4" height="6" />
              <rect x="16" y="0" width="4" height="6" /><rect x="24" y="0" width="4" height="6" />
              <rect x="32" y="0" width="4" height="6" /><rect x="40" y="0" width="4" height="6" />
              <rect x="48" y="0" width="4" height="6" />
            </g>
          </symbol>
        </defs>
  
        <rect width="1200" height="900" fill="url(#padGrid)" />
  
        <g fill="none" stroke="var(--copper-dim)" strokeWidth=".7" opacity=".35">
          <path d="M0 130 L160 130 L180 150 L420 150 L440 130 L640 130" />
          <path d="M0 170 L120 170 L140 190 L300 190" />
          <path d="M700 150 L900 150 L920 170 L1100 170 L1120 150 L1200 150" />
          <path d="M0 250 L80 250 L100 270 L260 270 L280 250 L520 250" />
          <path d="M560 290 L760 290 L780 310 L1000 310" />
          <path d="M0 380 L200 380 L220 360 L400 360" />
          <path d="M820 380 L1020 380 L1040 400 L1200 400" />
          <path d="M0 470 L140 470 L160 490 L380 490 L400 470 L600 470" />
          <path d="M640 510 L840 510 L860 530 L1100 530" />
          <path d="M0 590 L120 590 L140 610 L320 610" />
          <path d="M540 620 L760 620 L780 600 L980 600 L1000 620 L1200 620" />
          <path d="M0 690 L180 690 L200 670 L420 670" />
          <path d="M780 700 L1020 700 L1040 720 L1200 720" />
        </g>
  
        <g fill="none" stroke="var(--copper-dim)" strokeWidth=".8" opacity=".3">
          <path d="M0 80 L40 120 L40 220 L80 260 L80 340" />
          <path d="M1200 80 L1160 120 L1160 220 L1120 260 L1120 340" />
          <path d="M200 900 L240 860 L240 760 L280 720 L280 640" />
          <path d="M1000 900 L960 860 L960 760 L1000 720 L1000 640" />
          <path d="M450 0 L450 60 L490 100 L490 180" />
          <path d="M750 0 L750 60 L710 100 L710 180" />
        </g>
  
        <g fill="none" stroke="var(--copper)" strokeWidth="1.4" opacity=".6">
          <path d="M40 60 L260 60 L280 80 L520 80 L540 60 L860 60" />
          <path d="M40 100 L200 100 L220 120 L460 120" />
          <path d="M880 60 L1080 60 L1100 80 L1160 80" />
          <path d="M40 200 L40 760" />
          <path d="M1160 120 L1160 860" />
          <path d="M60 860 L300 860 L320 840 L900 840 L920 860 L1140 860" />
          <path d="M60 820 L260 820 L280 800 L860 800" />
          <path d="M540 760 L540 800 L600 800" />
          <path d="M620 760 L620 820" />
          <path d="M700 760 L700 800 L740 800" />
        </g>
  
        <g fill="none" stroke="var(--copper-bright)" strokeWidth="2" opacity=".35">
          <path d="M80 30 L80 90 L120 130 L320 130" />
          <path d="M1100 30 L1100 90 L1060 130 L880 130" />
          <path d="M60 880 L60 800 L100 760 L260 760" />
        </g>
  
        <use href="#ic" x="120" y="220" width="100" height="50" />
        <use href="#ic" x="980" y="240" width="100" height="50" />
        <use href="#ic" x="520" y="430" width="120" height="60" />
        <use href="#ic" x="160" y="650" width="90" height="45" />
        <use href="#ic" x="900" y="640" width="100" height="50" />
  
        <use href="#bus" x="80" y="320" width="180" height="20" />
        <use href="#bus" x="950" y="450" width="180" height="20" />
        <use href="#bus" x="430" y="700" width="200" height="20" />
  
        <use href="#smdRow" x="320" y="180" width="120" height="10" />
        <use href="#smdRow" x="780" y="380" width="120" height="10" />
        <use href="#smdRow" x="220" y="540" width="120" height="10" />
        <use href="#smdRow" x="700" y="560" width="120" height="10" />
  
        <g fill="var(--copper)" opacity=".55">
          <rect x="100" y="160" width="3" height="3" /><rect x="240" y="200" width="3" height="3" />
          <rect x="380" y="280" width="4" height="4" /><rect x="500" y="220" width="3" height="3" />
          <rect x="620" y="180" width="3" height="3" /><rect x="780" y="320" width="4" height="4" />
          <rect x="900" y="200" width="3" height="3" /><rect x="1080" y="280" width="3" height="3" />
          <rect x="60" y="380" width="3" height="3" /><rect x="180" y="420" width="4" height="4" />
          <rect x="340" y="460" width="3" height="3" /><rect x="480" y="380" width="3" height="3" />
          <rect x="660" y="420" width="4" height="4" /><rect x="820" y="480" width="3" height="3" />
          <rect x="1020" y="440" width="3" height="3" /><rect x="120" y="560" width="3" height="3" />
          <rect x="280" y="620" width="4" height="4" /><rect x="420" y="580" width="3" height="3" />
          <rect x="600" y="640" width="3" height="3" /><rect x="760" y="600" width="4" height="4" />
          <rect x="940" y="680" width="3" height="3" /><rect x="1120" y="620" width="3" height="3" />
          <rect x="200" y="740" width="3" height="3" /><rect x="500" y="720" width="4" height="4" />
          <rect x="820" y="760" width="3" height="3" />
        </g>
  
        <g fill="var(--copper-dim)" stroke="var(--copper)" strokeWidth=".8" opacity=".75">
          <circle cx="40" cy="60" r="3.5" /><circle cx="260" cy="60" r="3.5" />
          <circle cx="540" cy="60" r="3.5" /><circle cx="860" cy="60" r="3.5" />
          <circle cx="1080" cy="60" r="3.5" /><circle cx="1160" cy="80" r="3.5" />
          <circle cx="40" cy="760" r="3.5" /><circle cx="1160" cy="860" r="3.5" />
          <circle cx="320" cy="840" r="3.5" /><circle cx="900" cy="840" r="3.5" />
          <circle cx="540" cy="760" r="3.5" /><circle cx="620" cy="760" r="3.5" />
          <circle cx="700" cy="760" r="3.5" /><circle cx="120" cy="320" r="2.5" />
          <circle cx="260" cy="320" r="2.5" /><circle cx="950" cy="450" r="2.5" />
          <circle cx="1130" cy="450" r="2.5" /><circle cx="430" cy="700" r="2.5" />
          <circle cx="630" cy="700" r="2.5" /><circle cx="180" cy="490" r="2" />
          <circle cx="780" cy="170" r="2" /><circle cx="380" cy="600" r="2" />
        </g>
  
        <g fill="var(--copper)" opacity=".45">
          <circle cx="160" cy="280" r="5" />
          <circle cx="160" cy="280" r="2.2" fill="var(--pcb-bg)" opacity=".9" />
          <circle cx="1040" cy="320" r="5" />
          <circle cx="1040" cy="320" r="2.2" fill="var(--pcb-bg)" opacity=".9" />
          <circle cx="600" cy="540" r="5" />
          <circle cx="600" cy="540" r="2.2" fill="var(--pcb-bg)" opacity=".9" />
          <circle cx="240" cy="720" r="5" />
          <circle cx="240" cy="720" r="2.2" fill="var(--pcb-bg)" opacity=".9" />
          <circle cx="980" cy="730" r="5" />
          <circle cx="980" cy="730" r="2.2" fill="var(--pcb-bg)" opacity=".9" />
        </g>
  
        <g
          fill="var(--silk-dim)"
          fontFamily="Share Tech Mono, monospace"
          fontSize="9"
          opacity=".5"
          letterSpacing="2"
        >
          <text x="50" y="74">J1</text>
          <text x="270" y="74">R3</text>
          <text x="550" y="74">C12</text>
          <text x="870" y="74">U2</text>
          <text x="50" y="780">GND</text>
          <text x="1100" y="850">VCC</text>
          <text x="130" y="215">U7</text>
          <text x="990" y="235">U8</text>
          <text x="530" y="425">U1</text>
          <text x="170" y="645">U9</text>
          <text x="910" y="635">U3</text>
          <text x="80" y="345">BUS-A</text>
          <text x="950" y="475">BUS-B</text>
          <text x="430" y="725">BUS-C</text>
        </g>
      </svg>
    );
  }