import About from './panels/About.jsx';
import Works from './panels/Works.jsx';
import Skills from './panels/Skills.jsx';
import Writing from './panels/Writing.jsx';

const REC_LABEL = {
  about: 'CH01 ABOUT',
  works: 'CH02 WORKS',
  skills: 'CH03 SKILLS',
  writing: 'CH04 WRITING',
};

// onOpenWork / onOpenLog を子パネルに中継するだけ
export default function Screen({ activeTab, onOpenWork, onOpenLog }) {
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

      {activeTab === 'about' && <About />}
      {activeTab === 'works' && <Works onOpen={onOpenWork} />}
      {activeTab === 'skills' && <Skills />}
      {activeTab === 'writing' && <Writing onOpen={onOpenLog} />}
    </section>
  );
}