// frontend/src/hooks/useUptime.js
import { useEffect, useRef, useState } from 'react';

const pad = (n) => String(n).padStart(2, '0');

/**
 * マウント時からの経過時間を "UPTIME HH:MM" 形式で返す。
 * 1秒以下の精度は不要なので setInterval で十分。
 * 1時間以上動かす想定はあまりないので、HH:MMで上限なしに伸びる。
 */
export default function useUptime() {
  // 「いつマウントされたか」をrefで保持。
  // refを使う理由: 再レンダリングしてもこの値はリセットされない。
  // useStateだと書き換え時に再レンダリングが走るが、refは走らない。
  const startedAt = useRef(Date.now());
  const [label, setLabel] = useState('UPTIME 00:00');

  useEffect(() => {
    const tick = () => {
      // 経過秒
      const sec = Math.floor((Date.now() - startedAt.current) / 1000);
      const h = Math.floor(sec / 3600);
      const m = Math.floor((sec % 3600) / 60);
      // 1時間未満は MM:SS、1時間超えたら HH:MM に切り替える(チプカシ風)
      if (h === 0) {
        const s = sec % 60;
        setLabel(`UPTIME ${pad(m)}:${pad(s)}`);
      } else {
        setLabel(`UPTIME ${pad(h)}:${pad(m)}`);
      }
    };
    tick(); // 初回即実行(マウント直後の "00:00" を即座に正しい値に)
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return label;
}