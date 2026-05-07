const CMDS = [
    { cmd: 'talk',    label: 'はなす' },
    { cmd: 'check',   label: 'しらべる' },
    { cmd: 'item',    label: 'もちもの' },
    { cmd: 'contact', label: 'れんらく' },
  ];
  
  export default function CommandBar() {
    return (
      <nav className="cmd-bar" aria-label="commands">
        {CMDS.map((c) => (
          <button key={c.cmd} className="cmd-btn" data-cmd={c.cmd}>
            {c.label}
          </button>
        ))}
      </nav>
    );
  }