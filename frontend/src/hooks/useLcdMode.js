// frontend/src/hooks/useLcdMode.js
import { useEffect, useState, useCallback } from 'react';

const STORAGE_KEY = 'task-lcd-mode';
// 受け付ける値の型は 'dark' | 'light' のみ
const isValid = (v) => v === 'dark' || v === 'light';

/**
 * LCDモード(dark/light)の状態管理フック。
 *  - localStorageから前回値を読み出す
 *  - <html data-mode="..."> 属性に反映 (CSSが html[data-mode="light"] で見ている)
 *  - 切替関数を返す
 *
 * @returns {[ 'dark'|'light', () => void ]}
 */
export default function useLcdMode() {
  // 初期値: localStorageに保存があればそれ、なければ 'dark'。
  // useState初期化を関数で渡す(遅延初期化)ことで、毎回のレンダリングで
  // localStorageを読みに行かないようにできる。
  const [mode, setMode] = useState(() => {
    // 推測: SSR想定はないが、念のため window 存在チェック
    if (typeof window === 'undefined') return 'dark';
    const saved = window.localStorage.getItem(STORAGE_KEY);
    return isValid(saved) ? saved : 'dark';
  });

  // mode が変わるたびに <html> の data-mode 属性 と localStorage を同期する
  useEffect(() => {
    document.documentElement.setAttribute('data-mode', mode);
    try {
      window.localStorage.setItem(STORAGE_KEY, mode);
    } catch {
      // プライベートブラウジング等で書き込みに失敗するケースを握りつぶす
      // (動作には影響しないので silently fail)
    }
  }, [mode]);

  // 切替関数。useCallbackで「再レンダリングしても関数の参照が変わらない」ようにする。
  // (子コンポーネントに渡したときに不要な再レンダリングを防げる)
  const toggle = useCallback(() => {
    setMode((prev) => (prev === 'dark' ? 'light' : 'dark'));
  }, []);

  return [mode, toggle];
}