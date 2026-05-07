// frontend/src/components/DatasheetModal.jsx
// Step6: フォーカストラップ追加
import { useEffect } from 'react';
import useFocusTrap from '../hooks/useFocusTrap.js';

export default function DatasheetModal({ work, onClose }) {
    const open = !!work;
    // フォーカストラップ用 ref。open が true のときだけ罠が起動する。
    const trapRef = useFocusTrap(open);

  // ESCキーで閉じる + body scrollロック
  useEffect(() => {
    if (!open) return;

    const onKey = (e) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKey);

    // 背景スクロールを止める
    const prevOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    // クリーンアップ(モーダルを閉じたとき/アンマウント時)
    return () => {
      window.removeEventListener('keydown', onKey);
      document.body.style.overflow = prevOverflow;
    };
  }, [open, onClose]);

  if (!open) return null;

  // オーバーレイ自身がクリックされたときだけ閉じる(中身クリックでは閉じない)
  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) onClose();
  };

  return (
    <div
      className="ds-overlay open"
      onClick={handleOverlayClick}
      role="dialog"
      aria-modal="true"
      aria-label={`データシート: ${work.title}`}
    >
      {/* シートにrefを付ける。tabIndex=-1 はフォーカス可能要素が無いときの避難先 */}
      <div className="ds-sheet" ref={trapRef} tabIndex={-1}>
        {/* ヘッダ: 型番・REV / 閉じるボタン */}
        <div className="ds-head">
          <span className="pn">
            <b>P/N</b>
            {work.pn} &nbsp;/&nbsp; {work.rev}
          </span>
          <button className="ds-close" onClick={onClose} aria-label="close">
            ✕ CLOSE
          </button>
        </div>

        {/* 本文: 左にスクショ風SVG、右にテキスト */}
        <div className="ds-body">
          <div>
            <div
              className="ds-screenshot"
              // 自前データなのでSVG文字列をそのまま埋め込む
              dangerouslySetInnerHTML={{ __html: work.shot }}
            />
            <div className="cap-strip">FIG.1 — VIEW</div>
          </div>

          <div className="ds-main">
            <h2>{work.title}</h2>
            <div className="sub">{work.sub}</div>
            <p>{work.about}</p>
            <p style={{ opacity: 0.75, fontSize: 12 }}>{work.meta}</p>

            {work.pins?.length > 0 && (
              <>
                <div className="ds-section-h">▼ PINOUT</div>
                <div className="ds-pinout">
                  {work.pins.map(([n, label]) => (
                    <span key={n}>
                      <b>{n}</b>
                      {label}
                    </span>
                  ))}
                </div>
              </>
            )}

            {work.tags?.length > 0 && (
              <>
                <div className="ds-section-h">▼ TAGS</div>
                <div className="ds-tags">
                  {work.tags.map((t) => (
                    <span key={t}>{t}</span>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>

        {/* フッタ: ステータス */}
        <div className="ds-foot">
          <span>{work.dummy ? 'STATUS: DUMMY DATA' : 'STATUS: LIVE'}</span>
          <span className="blink">▼ ESC で とじる</span>
        </div>
      </div>
    </div>
  );
}