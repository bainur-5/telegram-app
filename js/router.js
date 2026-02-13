const screens = new Set(['finances', 'mining', 'market', 'referrals', 'profile']);
export function getScreenFromHash() {
  const s = window.location.hash.replace('#', '');
  return screens.has(s) ? s : 'market';
}
export function setScreenHash(screen) { window.location.hash = screen; }
