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
                  {/* 帽子 */}
                  <rect x="4" y="2" width="8" height="1" fill="#c9a96a" />
                  <rect x="3" y="3" width="10" height="2" fill="#c9a96a" />
                  <rect x="6" y="4" width="4" height="1" fill="#e0c187" />
                  {/* 顔 */}
                  <rect x="4" y="5" width="8" height="4" fill="#e8d6b8" />
                  <rect x="5" y="6" width="1" height="1" fill="#1b2415" />
                  <rect x="10" y="6" width="1" height="1" fill="#1b2415" />
                  <rect x="6" y="8" width="4" height="1" fill="#1b2415" />
                  {/* 体 */}
                  <rect x="4" y="9" width="8" height="4" fill="#3a5a3a" />
                  <rect x="6" y="10" width="4" height="1" fill="#c9a96a" />
                  <rect x="7" y="11" width="2" height="1" fill="#c9a96a" />
                  {/* 足 */}
                  <rect x="5" y="13" width="2" height="2" fill="#2a2820" />
                  <rect x="9" y="13" width="2" height="2" fill="#2a2820" />
                </svg>
              </div>
              <div className="label">TASK / Lv.31</div>
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
              {/* 次回フックで定期切替 */}
              <div className="line" id="aboutLine">
                「ぼくは、つよくなる とちゅう です。」
              </div>
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