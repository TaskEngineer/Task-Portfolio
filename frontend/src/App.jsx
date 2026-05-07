import { useState } from 'react';
import Header from './components/Header.jsx';
import ChipRow from './components/ChipRow.jsx';
import Tabs from './components/Tabs.jsx';
import Screen from './components/Screen.jsx';
import CommandBar from './components/CommandBar.jsx';
import Dialog from './components/Dialog.jsx';
import Footer from './components/Footer.jsx';
import BoardTraces from './components/BoardTraces.jsx';

// タブIDの定義(他コンポーネントとも共有したくなったら別ファイルへ)
const TABS = [
  { id: 'about',   num: 'CH 01', label: 'ABOUT',   jp: 'じこしょうかい' },
  { id: 'works',   num: 'CH 02', label: 'WORKS',   jp: 'さくひん' },
  { id: 'skills',  num: 'CH 03', label: 'SKILLS',  jp: 'そうび・しかく' },
  { id: 'writing', num: 'CH 04', label: 'WRITING', jp: 'きろく' },
];

export default function App() {
  // 現在のアクティブタブ。元コードは DOM の class でやっていたが、Reactでは state で持つ。
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="board-wrap">
      <div className="board" id="board">
        {/* マウントネジ(四隅) */}
        <div className="mount tl" />
        <div className="mount tr" />
        <div className="mount bl" />
        <div className="mount br" />

        {/* 基板背景の回路トレースSVG */}
        <BoardTraces />

        <Header />
        <ChipRow />
        <Tabs tabs={TABS} activeTab={activeTab} onChange={setActiveTab} />
        <Screen tabs={TABS} activeTab={activeTab} />
        <CommandBar />
        <Dialog />
        <Footer />
      </div>
    </div>
  );
}