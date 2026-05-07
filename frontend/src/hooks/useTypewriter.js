// frontend/src/hooks/useTypewriter.js
import { useEffect, useState } from 'react';

/**
 * 文字列を一文字ずつ表示していくフック。
 * MOTHER2のダイアログ表示風。
 *
 * @param {string} text   表示したい完全な文字列
 * @param {object} opts
 * @param {number} opts.speed  1文字あたりのms (デフォ 35ms)
 * @param {number} opts.delay  表示開始までの待ち時間ms (デフォ 0)
 * @returns {{ display: string, done: boolean, skip: () => void }}
 *   display: 現在表示中の途中文字列
 *   done: 全文表示完了したか
 *   skip: 即座に最後まで飛ばす関数(クリックで全表示など)
 */
export default function useTypewriter(text, { speed = 35, delay = 0 } = {}) {
  const [display, setDisplay] = useState('');
  const [done, setDone] = useState(false);

  useEffect(() => {
    // text自体が変わったらリセット
    setDisplay('');
    setDone(false);

    let i = 0;
    let intervalId;

    // delay経過後にタイピング開始
    const startId = setTimeout(() => {
      intervalId = setInterval(() => {
        i += 1;
        // text.slice(0, i) で「先頭からi文字」を切り出す。
        // 1文字ずつ +=連結すると、サロゲートペア(絵文字など)で破綻するのでsliceが安全。
        setDisplay(text.slice(0, i));
        if (i >= text.length) {
          clearInterval(intervalId);
          setDone(true);
        }
      }, speed);
    }, delay);

    // クリーンアップ: タイマー両方止める
    return () => {
      clearTimeout(startId);
      clearInterval(intervalId);
    };
  }, [text, speed, delay]);

  // 全文表示にスキップする関数
  const skip = () => {
    setDisplay(text);
    setDone(true);
  };

  return { display, done, skip };
}