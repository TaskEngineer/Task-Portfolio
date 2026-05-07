import { useState, useCallback } from 'react';
import Header from './components/Header.jsx';
import ChipRow from './components/ChipRow.jsx';
import Tabs from './components/Tabs.jsx';
import Screen from './components/Screen.jsx';
import CommandBar from './components/CommandBar.jsx';
import Dialog from './components/Dialog.jsx';
import Footer from './components/Footer.jsx';
import BoardTraces from './components/BoardTraces.jsx';
import DatasheetModal from './components/DatasheetModal.jsx';
import LogModal from './components/LogModal.jsx';

const TABS = [
  { id: 'about',   num: 'CH 01', label: 'ABOUT',   jp: 'じこしょうかい' },
  { id: 'works',   num: 'CH 02', label: 'WORKS',   jp: 'さくひん' },
  { id: 'skills',  num: 'CH 03', label: 'SKILLS',  jp: 'そうび・しかく' },
  { id: 'writing', num: 'CH 04', label: 'WRITING', jp: 'きろく' },
];

// CommandBar の各ボタンに対応する Dialog テキスト
// MOTHER2風の三人称ナレーション + 用件で固定
const COMMAND_LINES = {
  talk:
    '『はなす コマンド を つかった!\nボードは すこし てれている。\n「よろしく おねがいします。」』',
  check:
    '『しらべる コマンド を つかった!\nこの ボードには ABOUT / WORKS / SKILLS / WRITING の よっつの チャンネル が ある らしい。』',
  item:
    '『もちもの コマンド を つかった!\n▶ はんだごて  ▶ テスター  ▶ ノートPC\n▶ 基本情報 / NW / SAP / E資格 の おまもり』',
  contact:
    '『れんらく コマンド を つかった!\n GitHub / X / メール の どれか で つながれます。\n(リンクは じゅんびちゅう)』',
};

export default function App() {
  const [activeTab, setActiveTab] = useState('about');

  // モーダル状態(開いている対象を持つ。null なら閉)
  const [selectedWork, setSelectedWork] = useState(null);
  const [selectedLog, setSelectedLog] = useState(null);

  // Dialog に表示するテキスト(undefined ならデフォルト文)
  const [dialogText, setDialogText] = useState(undefined);

  // CommandBar のクリックハンドラ
  // useCallback で参照安定化(子の不要な再render回避)
  const handleCommand = useCallback((cmd) => {
    setDialogText(COMMAND_LINES[cmd] ?? undefined);
  }, []);

  // モーダルを閉じる
  const closeWork = useCallback(() => setSelectedWork(null), []);
  const closeLog = useCallback(() => setSelectedLog(null), []);

  return (
    <div className="board-wrap">
      <div className="board" id="board">
        <div className="mount tl" />
        <div className="mount tr" />
        <div className="mount bl" />
        <div className="mount br" />

        <BoardTraces />

        <Header />
        <ChipRow />
        <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
        <Screen
          tabs={TABS}
          activeTab={activeTab}
          onOpenWork={setSelectedWork}
          onOpenLog={setSelectedLog}
        />
        <CommandBar onCommand={handleCommand} />
        <Dialog text={dialogText} />
        <Footer />
      </div>

      {/* モーダル類は board の外に出して、z-index衝突を避ける */}
      <DatasheetModal work={selectedWork} onClose={closeWork} />
      <LogModal log={selectedLog} onClose={closeLog} />
    </div>
  );
}