// Dialog: 親から渡された text を MOTHER風にタイプライタ表示する
// - useTypewriter があればそれを使う(Step 4 で実装済みの想定)
// - text が変わるたびにアニメーションがリスタートする
import useTypewriter from '../hooks/useTypewriter.js';

const DEFAULT_TEXT =
  '『でんげんが はいりました。\nすきな チャンネルを えらんでください。』';

export default function Dialog({ text }) {
  // text が指定されなければデフォルト文を表示
  const { display } = useTypewriter(text ?? DEFAULT_TEXT, 36); // 36ms/文字くらい

  return (
    <div className="dialog" id="dialog" role="status" aria-live="polite">
      <div className="speaker">▼ ボード</div>
      <div className="line" id="dialogLine" style={{ whiteSpace: 'pre-wrap' }}>
        {display}
      </div>
    </div>
  );
}