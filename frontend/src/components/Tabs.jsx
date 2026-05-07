export default function Tabs({ tabs, activeTab, onChange }) {
    return (
      <nav className="tabs" id="tabs">
        {tabs.map((t) => (
          <button
            key={t.id}
            className={`tab${activeTab === t.id ? ' active' : ''}`}
            onClick={() => onChange(t.id)}
          >
            <span className="led" />
            <span className="num">{t.num}</span>
            {t.label}
            <span className="jp">{t.jp}</span>
          </button>
        ))}
      </nav>
    );
  }