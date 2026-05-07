import { useEffect, useState } from 'react';
import useTypewriter from '../../hooks/useTypewriter.js';

// 切替表示するセリフ群(MOTHER風)
const ABOUT_LINES = [
    '「ぼくは、つよくなる とちゅう です。」',
    '「コーヒー より モンスター エナジー。」',
    '「『なんか動かない』を ほんやく する しごと。」',
    '「はんだごて も つかえます。」',
    '「チプカシ とかの ガジェット が すきだ。」',
    '「電子音楽 を きいて やるき を だす。」',
    '「ただ の しかく マニア の ようだ。」'
  ];

function AboutLine() {
const [idx, setIdx] = useState(0);
// 8秒ごとにセリフを切り替える
useEffect(() => {
    const id = setInterval(() => {
    setIdx((prev) => (prev + 1) % ABOUT_LINES.length);
    }, 8000);
    return () => clearInterval(id);
}, []);

// タイプライター効果で表示
const { display } = useTypewriter(ABOUT_LINES[idx], { speed: 50 });

return (
    <div className="line" id="aboutLine">
    {display}
    </div>
);
}

export default function About() {
    return (
      <div className="panel active" data-panel="about">
        <div className="about-grid">
          <div>
          <div className="avatar-card">
            <div className="avatar" aria-label="task pixel avatar">
                <svg
                viewBox="0 0 16 16"
                shapeRendering="crispEdges"
                xmlns="http://www.w3.org/2000/svg"
                >
                    {/* 髪 上部 */}
                    <rect x="3"  y="0" width="10" height="1" fill="#191008" />
                    <rect x="2"  y="1" width="12" height="1" fill="#191008" />
                    <rect x="1"  y="2" width="14" height="2" fill="#191008" />

                    {/* 前髪(ふわっと額にかかる・左右から) */}
                    <rect x="1"  y="4" width="4"  height="1" fill="#191008" />
                    <rect x="11" y="4" width="4"  height="1" fill="#191008" />
                    <rect x="1"  y="5" width="3"  height="1" fill="#191008" />
                    <rect x="12" y="5" width="3"  height="1" fill="#191008" />

                    {/* 顔ベース(丸め・ふっくら) */}
                    <rect x="2"  y="4" width="12" height="8"  fill="#dba876" />

                    {/* 目(穏やか・細め) */}
                    <rect x="4"  y="6" width="3"  height="1" fill="#191008" />
                    <rect x="9"  y="6" width="3"  height="1" fill="#191008" />

                    {/* 鼻 */}
                    <rect x="7"  y="8" width="2"  height="1" fill="#c08050" />

                    {/* 口(端が上がった笑顔) */}
                    <rect x="5"  y="10" width="1"  height="1" fill="#a06040" />
                    <rect x="6"  y="11" width="4"  height="1" fill="#a06040" />
                    <rect x="10" y="10" width="1"  height="1" fill="#a06040" />

                    {/* 耳 */}
                    <rect x="1"  y="7" width="1"  height="2" fill="#c8905e" />
                    <rect x="14" y="7" width="1"  height="2" fill="#c8905e" />

                    {/* 首 */}
                    <rect x="6"  y="12" width="4"  height="1" fill="#c8905e" />

                    {/* 体(水色シャツ) */}
                    <rect x="1"  y="13" width="14" height="3" fill="#a8c8e8" />

                    {/* えり */}
                    <rect x="6"  y="13" width="1"  height="2" fill="#e8eef4" />
                    <rect x="9"  y="13" width="1"  height="2" fill="#e8eef4" />
                  </svg>
                </div>
                <div className="label">TASK / Lv.26</div>
            </div>
  
            <table className="spec-table" aria-label="basic spec">
              <tbody>
                <tr><th>NAME</th><td>TASK</td></tr>
                <tr>
                  <th>CLASS</th>
                  <td>サービスデスク<br />→ 自動化エンジニア(見習い)</td>
                </tr>
                <tr>
                  <th>EXP</th>
                  <td>サポート 5年<br />設計支援 1年</td>
                </tr>
                <tr><th>HP/MP</th><td>120 / 80</td></tr>
                <tr><th>STATUS</th><td>れいせい (つねにねむい)</td></tr>
              </tbody>
            </table>
          </div>
  
          <div className="about-text">
            <h2>はじめまして、Taskです。</h2>
            <div className="role">SERVICE DESK / AUTOMATION ENGINEER (TRAINEE)</div>
  
            <p>
              法人向けクラウドサービスのサービスデスクを5年やってきました。
              ネットワークやクラウドインフラのトラブルシューティングが得意で、
              「なんか動かない」を「ここで詰まってます」に翻訳する仕事をずっとやっていた人間です。
            </p>
            <p>
              完全な知識先行型で、設計開発の実務経験はありませんでした。
              直近1年は社内業務自動化の設計支援にシフトし、
              ようやく自分の手でモノを作る側に回ろうとしているところです。
            </p>
            <p>
              コーディングは初心者です。JavaScriptで簡単なブックマークレットを書いたり、
              Pythonで小道具を作ったりしながら、このポートフォリオサイトもGitHubに置いて少しずつ育てています。
            </p>
  
            <div className="speech">
              <div className="who">▼ TASK のはなし</div>
                <AboutLine />
            </div>
  
            <div className="section-h">▼ MODE OF OPERATION / 動作モード</div>
            <table className="spec-table">
              <tbody>
                <tr>
                  <th>得意領域</th>
                  <td>NW/クラウドの障害切り分け、再現手順化</td>
                </tr>
                <tr>
                  <th>現在の関心</th>
                  <td>業務自動化の設計、社内ツールの内製化、クラウド構成の最適化</td>
                </tr>
                <tr>
                  <th>苦手</th>
                  <td>ゼロから書くフロントエンド (このサイトで克服中)</td>
                </tr>
                <tr>
                  <th>燃料</th>
                  <td>モンスターエナジー / チプカシとかのガジェット / 電子音楽</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    );
  }