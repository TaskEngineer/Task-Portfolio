import About from './panels/About.jsx';
import Works from './panels/Works.jsx';
import Skills from './panels/Skills.jsx';
import Writing from './panels/Writing.jsx';

// REC表示用のラベル(activeTab → 表示文字列)
const REC_LABEL = {
  about: 'CH01 ABOUT',
  works: 'CH02 WORKS',
  skills: 'CH03 SKILLS',
  writing: 'CH04 WRITING',
};

export default function Screen({ activeTab }) {
  return (
    <section className="screen-frame">
      <div className="screen-statusbar">
        <span>
          <span className="blink">●</span> REC{' '}
          <span id="recCh">{REC_LABEL[activeTab]}</span>
        </span>
        <span>SIG ▮▮▮▮▮▯ &nbsp; BAT ▮▮▮▮▯</span>
        <span>v1.0.0</span>
      </div>

      {/* 元コードでは display: none / block の切替だったが、
          Reactでは「表示するパネルだけ render」するほうがシンプル。
          ただしアニメーション(.panel-in)を活かすため className は残す */}
      {activeTab === 'about' && <About />}
      {activeTab === 'works' && <Works />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'writing' && <Writing />}
    </section>
  );
}