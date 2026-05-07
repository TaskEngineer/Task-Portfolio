import { LOGS } from '../../data/logs.js';

export default function Writing() {
  return (
    <div className="panel active" data-panel="writing">
      <div className="section-h">▼ LOG / きろく</div>

      <div className="writing-list">
        {LOGS.map((l) => (
          <div
            key={l.id}
            className="write-row"
            data-log={l.id}
            tabIndex={0}
            style={{ cursor: 'pointer' }}
            // TODO(next): クリックで Log モーダルを開く
          >
            <span className="date">{l.date}</span>
            <span>{l.title}</span>
            <span className="tag">{l.dummy ? 'DUMMY' : 'LIVE'}</span>
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
        ▶ ぎょう を クリック すると LOG VIEWER が ひらきます。 「▶ ぜんぶ読む」は じゅんびちゅう です。
      </p>

      <div className="section-h">▼ NOTE</div>
      <p
        style={{
          fontFamily: "'DotGothic16',monospace",
          fontSize: 13,
          lineHeight: 1.8,
          margin: 0,
        }}
      >
        ここの記事はすべてダミーです。
        <br />
        本物は近いうちに、はんだごてで一本ずつ追加していく予定です。
      </p>
    </div>
  );
}