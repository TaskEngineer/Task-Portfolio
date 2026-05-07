import { WORKS } from '../../data/works.js';

export default function Works({ onOpen }) {
  return (
    <div className="panel active" data-panel="works">
      <div className="section-h">▼ EQUIPPED PROJECTS / そうびちゅうのプロジェクト</div>

      <div className="works-list">
        {WORKS.map((w) => (
          <div
            key={w.id}
            className={`work-card${w.dummy ? ' dummy' : ''}`}
            data-work={w.id}
            tabIndex={0}
            role="button"
            aria-label={`${w.title} のデータシートを開く`}
            onClick={() => onOpen?.(w)}
            onKeyDown={(e) => {
              if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                onOpen?.(w);
              }
            }}
          >
            <div className="ic">
              {/* SVG文字列を直接挿入(自前データなので安全) */}
              <svg
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
                dangerouslySetInnerHTML={{ __html: w.ic }}
              />
            </div>
            <div className="body">
              <h3>{w.title}</h3>
              <p>{w.desc}</p>
              <div className="meta">{w.meta}</div>
            </div>
            <div className="arrow">▶</div>
          </div>
        ))}
      </div>

      <p
        style={{
          fontFamily: "'Share Tech Mono',monospace",
          fontSize: 10,
          letterSpacing: '.2em',
          opacity: 0.6,
          marginTop: 14,
        }}
      >
        ▶ カードを クリック すると DATASHEET が ひらきます。 ESC で とじます。
      </p>
    </div>
  );
}