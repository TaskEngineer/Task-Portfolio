export default function Dialog() {
    return (
      <div className="dialog" id="dialog" role="status" aria-live="polite">
        <div className="speaker">▼ ボード</div>
        <div className="line" id="dialogLine">
          『でんげんが はいりました。
          <br />
          すきな チャンネルを えらんでください。』
        </div>
      </div>
    );
  }