// frontend/src/hooks/useClock.js
import { useEffect, useState } from 'react';

// 曜日テーブル(0=日曜)。チプカシ風に英語3文字大文字。
const DOW = ['SUN', 'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT'];

// 数字を2桁0埋めにする。例: 5 → "05"
const pad = (n) => String(n).padStart(2, '0');

/**
 * LCD時計用のフック。
 * 1秒ごとに現在時刻を計算し直して返す。
 * @returns {{ time: string, dow: string, date: string }}
 *   time: "21:04:33"
 *   dow:  "WED"
 *   date: "05/07"
 */
export default function useClock() {
  // 初回レンダリング時に一度だけ「今」を計算してstateの初期値にする。
  // こうすると最初の1秒間 "--:--:--" が見える問題を回避できる。
  const [now, setNow] = useState(() => new Date());

  useEffect(() => {
    // 1000ms = 1秒ごとにNowを更新
    const id = setInterval(() => setNow(new Date()), 1000);
    // クリーンアップ: コンポーネントが消えるときにタイマーを止める。
    // これを忘れるとメモリリークの原因になる。
    return () => clearInterval(id);
  }, []); // 空配列 = マウント時に1回だけセットアップ

  return {
    time: `${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`,
    dow: DOW[now.getDay()],
    date: `${pad(now.getMonth() + 1)}/${pad(now.getDate())}`,
  };
}