// frontend/src/components/Dialog.jsx
// Step6: useTypewriter のオプションをオブジェクト形式に統一
import useTypewriter from '../hooks/useTypewriter.js';

const DEFAULT_TEXT =
  '『でんげんが はいりました。\nすきな チャンネルを えらんでください。』';

export default function Dialog({ text }) {
  // useTypewriter の第2引数は { speed, delay } のオブジェクト。
  // 以前は `useTypewriter(text, 36)` と数値を渡していたため、
  // 第2引数が破棄されデフォルト 35ms にフォールバックしていた。
  const { display } = useTypewriter(text ?? DEFAULT_TEXT, { speed: 36 });

  return (
    <div className="dialog" id="dialog" role="status" aria-live="polite">
      <div className="speaker">▼ ボード</div>
      <div className="line" id="dialogLine" style={{ whiteSpace: 'pre-wrap' }}>
        {display}
      </div>
    </div>
  );
}