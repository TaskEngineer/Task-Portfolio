// frontend/src/hooks/useFocusTrap.js
// モーダル等のオーバーレイUI内に Tab フォーカスを閉じ込めるフック。
// active=true のときだけ動作し、解除時は開く前のフォーカスへ復帰する。
import { useEffect, useRef } from 'react';

// フォーカス可能な要素のセレクタ。
// disabled / tabindex="-1" / aria-hidden="true" は除外する。
const FOCUSABLE = [
  'a[href]',
  'button:not([disabled])',
  'textarea:not([disabled])',
  'input:not([disabled])',
  'select:not([disabled])',
  '[tabindex]:not([tabindex="-1"])',
].join(',');

/**
 * @param {boolean} active - 罠を有効にするか(モーダルが開いている間 true)
 * @returns {React.RefObject<HTMLElement>} - トラップしたいコンテナにつける ref
 */
export default function useFocusTrap(active) {
  // ref を返してコンポーネント側で対象要素に付けてもらう
  const containerRef = useRef(null);
  // モーダル開時のフォーカス元 (閉じたときに戻すため)
  const prevFocusRef = useRef(null);

  useEffect(() => {
    if (!active) return;

    const container = containerRef.current;
    if (!container) return;

    // 1) 現在のフォーカス要素を覚えておく
    prevFocusRef.current = document.activeElement;

    // 2) フォーカス可能要素一覧を取り出すヘルパ
    //    モーダル内のDOMはレンダリング後に変わる可能性もあるので、
    //    keydownハンドラ内で都度問い合わせる方針にする
    const getFocusables = () => {
      // querySelectorAll は NodeList を返すので Array に変換しておくと扱いやすい
      const list = container.querySelectorAll(FOCUSABLE);
      // aria-hidden の祖先がある要素は除く(ざっくり実装。完全網羅はしない)
      return Array.from(list).filter((el) => !el.closest('[aria-hidden="true"]'));
    };

    // 3) 初期フォーカス: 一番最初のフォーカス可能要素へ
    //    なければコンテナ自体にフォーカス (tabIndex=-1 を付けて呼び出す想定)
    const focusables = getFocusables();
    if (focusables.length > 0) {
      focusables[0].focus();
    } else {
      container.focus();
    }

    // 4) Tab / Shift+Tab を監視して先頭⇄末尾で循環させる
    const onKeyDown = (e) => {
      if (e.key !== 'Tab') return;

      const items = getFocusables();
      if (items.length === 0) {
        // フォーカス対象がないならTabを無効化
        e.preventDefault();
        return;
      }

      const first = items[0];
      const last = items[items.length - 1];
      const activeEl = document.activeElement;

      if (e.shiftKey) {
        // Shift+Tab: 先頭にいたら末尾へ飛ばす
        if (activeEl === first || !container.contains(activeEl)) {
          e.preventDefault();
          last.focus();
        }
      } else {
        // Tab: 末尾にいたら先頭へ飛ばす
        if (activeEl === last) {
          e.preventDefault();
          first.focus();
        }
      }
    };

    // keydown を捕まえる(キャプチャ不要、bubbling で十分)
    container.addEventListener('keydown', onKeyDown);

    // 5) クリーンアップ: 購読解除 + フォーカス復元
    return () => {
      container.removeEventListener('keydown', onKeyDown);
      // 元のフォーカス要素がまだ生きていれば戻す
      if (prevFocusRef.current && typeof prevFocusRef.current.focus === 'function') {
        prevFocusRef.current.focus();
      }
    };
  }, [active]);

  return containerRef;
}