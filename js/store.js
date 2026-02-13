export const state = {
  activeScreen: 'market',
  market: { tab: 'all', sortField: 'price', sortOrder: 'asc', isCreateOpen: false, eggsInput: '', totalTonInput: '' },
  finances: { tab: 'deposit', amount: '', memo: 'Memo', withdrawAmount: '', withdrawAddress: '' },
  profile: {
    notifications: [
      { id: 'sold', title: 'Заказ продан', description: 'Когда ваши заказы исполнены', enabled: true },
      { id: 'deposits', title: 'Депозиты', description: 'Когда депозиты зачислены', enabled: true },
      { id: 'referrals', title: 'Рефералы', description: 'Награды и новые друзья', enabled: true },
      { id: 'squids', title: 'Кальмары', description: 'Покупка и крафт кальмаров', enabled: true },
    ],
    activeLanguage: 'ru',
  },
};

const listeners = new Set();
export const subscribe = (fn) => (listeners.add(fn), () => listeners.delete(fn));
export function setState(updater) {
  updater(state);
  listeners.forEach((fn) => fn(state));
}
