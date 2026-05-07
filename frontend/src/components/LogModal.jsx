// frontend/src/components/LogModal.jsx
// Step6: フォーカストラップ追加
import { useEffect } from 'react';
import useFocusTrap from '../hooks/useFocusTrap.js';

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

  return (
    <div
      className="ds-overlay open"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`ログ: ${log.title}`}
    >
      {/* ref と tabIndex=-1 を追加 */}
      <div className="ds-sheet" ref={trapRef} tabIndex={-1}>
        <div className="ds-head">
          <span className="pn">
            <b>P/N</b>
            {log.pn} &nbsp;/&nbsp; {log.date} &nbsp;/&nbsp; READ {log.read}min
          </span>
          <button className="ds-close" onClick={onClose} aria-label="close">
            ✕ CLOSE
          </button>
        </div>

        {/* 記事は本文中心なので1カラム表示。CSSの ds-body は2カラムなので、
            ここでは grid-template-columns を 1fr に上書き */}
        <div
          className="ds-body"
          style={{ gridTemplateColumns: '1fr' }}
        >
          <div className="ds-main">
            <h2>{log.title}</h2>
            <div className="sub">{log.sub}</div>

            {/* 本文(ダミー) */}
            <p style={{ whiteSpace: 'pre-wrap' }}>{log.excerpt}</p>

            <p style={{ opacity: 0.6, fontSize: 12, marginTop: 14 }}>
              ※ この記事は{log.dummy ? 'ダミー' : '公開済み'}です。
              本文は今後はんだ付けしていきます。
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