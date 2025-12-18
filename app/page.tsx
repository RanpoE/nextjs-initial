'use client';

const retroGames = [
  {
    title: 'Space Invaders',
    year: 1978,
    tagline: 'Defend Earth against descending pixel invaders.',
    stats: 'Score multiplier + shields',
    link: 'https://en.wikipedia.org/wiki/Space_Invaders'
  },
  {
    title: 'Pac-Man',
    year: 1980,
    tagline: 'Chomp through neon mazes while dodging ghosts.',
    stats: 'Power pellets + ghost combo chains',
    link: 'https://en.wikipedia.org/wiki/Pac-Man'
  },
  {
    title: 'The Legend of Zelda',
    year: 1986,
    tagline: 'Explore dungeons and collect the Triforce shards.',
    stats: 'Open world + puzzle dungeons',
    link: 'https://en.wikipedia.org/wiki/The_Legend_of_Zelda_(video_game)'
  },
  {
    title: 'Tetris',
    year: 1984,
    tagline: 'Stack falling tetrominoes to clear lines forever.',
    stats: 'Endless loop + hypnotic soundtrack',
    link: 'https://en.wikipedia.org/wiki/Tetris'
  },
  {
    title: 'Street Fighter II',
    year: 1991,
    tagline: 'Duke it out with iconic world warriors.',
    stats: 'Combos + special moves',
    link: 'https://en.wikipedia.org/wiki/Street_Fighter_II'
  },
  {
    title: 'Chrono Trigger',
    year: 1995,
    tagline: 'Travel through time to rewrite destiny.',
    stats: 'Team techs + branching endings',
    link: 'https://en.wikipedia.org/wiki/Chrono_Trigger'
  }
];

const highlights = [
  'Pixel-perfect nostalgia rendered in phosphor green.',
  'Minimal UI that mirrors command-line dashboards.',
  'Curated picks spanning arcades, consoles, and RPG epics.',
  'Built for keyboard navigation and quick scanning.'
];

export default function Home() {
  return (
    <main className="terminal-shell">
      <div className="crt-overlay" aria-hidden="true" />
      <header className="terminal-header">
        <div className="header-glow" aria-hidden="true" />
        <div>
          <p className="eyebrow">// RETRO TERMINAL //</p>
          <h1 className="hero-title">Retro Arcade Memory Bank</h1>
          <p className="hero-subtitle">
            A minimalist landing page that celebrates the legendary games that
            shaped the golden age of play. Boots instantly, no coins required.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="#games">
              Launch catalog
            </a>
            <a className="btn ghost" href="#about">
              System specs
            </a>
          </div>
        </div>
        <div className="terminal-widget">
          <div className="widget-header">NOW PLAYING</div>
          <div className="widget-body">
            <p className="widget-line">user@arcade:~$ boot --retro</p>
            <p className="widget-line">loading memory banks ...</p>
            <p className="widget-line pulse">▶ Ready. Insert imagination.</p>
          </div>
        </div>
      </header>

      <section id="about" className="panel">
        <div className="panel-header">SYSTEM STATUS</div>
        <div className="panel-body">
          <div className="stats-grid">
            <div className="stat-card">
              <p className="stat-label">Mode</p>
              <p className="stat-value">Retro Terminal Minimal</p>
              <p className="stat-hint">Monochrome palette + scanlines</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Curation</p>
              <p className="stat-value">6 legendary titles</p>
              <p className="stat-hint">Arcade to RPG classics</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Controls</p>
              <p className="stat-value">Keyboard-friendly</p>
              <p className="stat-hint">Tab through cards like a pro</p>
            </div>
            <div className="stat-card">
              <p className="stat-label">Vibe</p>
              <p className="stat-value">CRT glow + gridlines</p>
              <p className="stat-hint">Minimal distractions</p>
            </div>
          </div>
          <ul className="highlight-list">
            {highlights.map((item) => (
              <li key={item} className="highlight-item">
                <span className="bullet">▸</span>
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section id="games" className="panel">
        <div className="panel-header">FEATURED ROMS</div>
        <div className="panel-body games-grid">
          {retroGames.map((game) => (
            <article key={game.title} className="game-card">
              <div className="card-header">
                <div>
                  <p className="eyebrow">{game.year}</p>
                  <h2 className="card-title">{game.title}</h2>
                </div>
                <a className="link" href={game.link} target="_blank" rel="noreferrer">
                  read dossier ↗
                </a>
              </div>
              <p className="card-body">{game.tagline}</p>
              <div className="card-footer">
                <span className="pill">{game.stats}</span>
                <span className="pill ghost">retro-approved</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="panel">
        <div className="panel-header">SIGNAL</div>
        <div className="panel-body callout">
          <p className="callout-title">Press start to keep the signal alive.</p>
          <p className="callout-copy">
            Follow the catalog, bookmark the page, and send it to a friend who
            still remembers the sound of a coin drop. The retro future is bright
            green.
          </p>
          <div className="cta-row">
            <a className="btn primary" href="mailto:retro@terminal.land">Send feedback</a>
            <a className="btn ghost" href="#top">
              Back to top ↑
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
