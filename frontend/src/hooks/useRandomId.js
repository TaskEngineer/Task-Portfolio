// frontend/src/hooks/useRandomId.js
import { useState } from 'react';

/**
 * 起動時に1度だけランダム文字列を生成して保持するフック。
 * Serial番号やBuildIDなど「セッション中は固定だが起動毎に変わる」値に使う。
 *
 * @param {object} opts
 * @param {number} opts.length  桁数 (デフォ 6)
 * @param {string} opts.prefix  接頭辞 (デフォ '')
 * @param {'hex'|'num'} opts.charset  文字種 (デフォ 'num')
 * @returns {string}
 */
export default function useRandomId({
  length = 6,
  prefix = '',
  charset = 'num',
} = {}) {
  // useStateの遅延初期化で、初回レンダリング時に1度だけ生成。
  // 以降の再レンダリングでは同じ値が返り続ける。
  const [id] = useState(() => {
    const pool = charset === 'hex' ? '0123456789ABCDEF' : '0123456789';
    let s = '';
    for (let i = 0; i < length; i++) {
      s += pool[Math.floor(Math.random() * pool.length)];
    }
    return prefix + s;
  });

  return id;
}