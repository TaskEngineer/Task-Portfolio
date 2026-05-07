// frontend/src/components/LogModal.jsx
// Step6: Markdown本文表示に対応
import { useEffect } from 'react';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';
import useFocusTrap from '../hooks/useFocusTrap.js';

// 日本語想定の読了分数推計。500字/分くらいが体感に合う。
// (英文だと200wpm が目安だが、ここは個人ブログなので雑に決め打ち)
const estimateReadMinutes = (text) => {
  if (!text) return null;
  const len = text.replace(/\s+/g, '').length;
  return Math.max(1, Math.round(len / 500));
};

export default function LogModal({ log, onClose }) {
  const open = !!log;
  const trapRef = useFocusTrap(open);

  useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  // 本文の取得: body があればMarkdown、なければ excerpt をプレーン表示
  const hasBody = !!log.body;
  // 読了分数は body 優先、なければ data側の read を使う
  const readMin = hasBody ? estimateReadMinutes(log.body) : log.read;

  return (
    <div
      className="ds-overlay open"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`ログ: ${log.title}`}
    >
      <div className="ds-sheet" ref={trapRef} tabIndex={-1}>
        <div className="ds-head">
          <span className="pn">
            <b>P/N</b>
            {log.pn} &nbsp;/&nbsp; {log.date} &nbsp;/&nbsp; READ {readMin}min
          </span>
          <button className="ds-close" onClick={onClose} aria-label="close">
            ✕ CLOSE
          </button>
        </div>

        <div className="ds-body" style={{ gridTemplateColumns: '1fr' }}>
          <div className="ds-main">
            <h2>{log.title}</h2>
            <div className="sub">{log.sub}</div>

            {/* 本文表示エリア */}
            {hasBody ? (
              // .log-md クラス配下にMarkdownのHTMLが流れ込む
              // CSSはここでh2/p/code等のスタイルを当てている
              <div className="log-md">
                <ReactMarkdown remarkPlugins={[remarkGfm]}>
                  {log.body}
                </ReactMarkdown>
              </div>
            ) : (
              // body が無い記事はexcerptをプレーン表示 (従来通り)
              <p style={{ whiteSpace: 'pre-wrap' }}>{log.excerpt}</p>
            )}

            <p style={{ opacity: 0.6, fontSize: 12, marginTop: 14 }}>
              ※ この記事は{log.dummy ? 'ダミーです。本文は今後はんだ付けしていきます。' : '公開済みです。'}
            </p>

            {log.tags?.length > 0 && (
              <>
                <div className="ds-section-h">▼ TAGS</div>
                <div className="ds-tags">
                  {log.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        <div className="ds-foot">
          <span>{log.dummy ? 'STATUS: DUMMY' : 'STATUS: LIVE'}</span>
          <span className="blink">▼ ESC で とじる</span>
        </div>
      </div>
    </div>
  );
}