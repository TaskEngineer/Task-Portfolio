// CommandBar: 4つのコマンドボタン
// クリックされたコマンドを onCommand(cmd) で親に通知するだけのシンプルな責務
const CMDS = [
  { cmd: 'talk',    label: 'はなす' },
  { cmd: 'check',   label: 'しらべる' },
  { cmd: 'item',    label: 'もちもの' },
  { cmd: 'contact', label: 'れんらく' },
];

export default function CommandBar({ onCommand }) {
  return (
    <nav className="cmd-bar" aria-label="commands">
      {CMDS.map((c) => (
        <button
          key={c.cmd}
          className="cmd-btn"
          data-cmd={c.cmd}
          onClick={() => onCommand?.(c.cmd)}
        >
          {c.label}
        </button>
      ))}
    </nav>
  );
}