export const ThemeToggle = () => (
  <button
    type="button"
    className="theme-toggle"
    data-theme-toggle
    disabled
    title="Theme switching is temporarily disabled"
  >
    <svg className="theme-toggle__to-light" viewBox="0 0 24 24" aria-hidden="true">
      <circle cx="12" cy="12" r="4" />
      <path d="M12 2v2m0 16v2M2 12h2m16 0h2M5 5l1.5 1.5m11 11L19 19M5 19l1.5-1.5m11-11L19 5" />
    </svg>
    <span className="theme-toggle__label theme-toggle__to-light">Dark mode (theme switching temporarily disabled)</span>
    <svg className="theme-toggle__to-dark" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M20.5 13a8.5 8.5 0 0 1-9.5-9.5A8.5 8.5 0 1 0 20.5 13Z" />
    </svg>
    <span className="theme-toggle__label theme-toggle__to-dark">Switch to dark mode</span>
  </button>
);
