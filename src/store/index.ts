import create from 'zustand';

interface StoreType {
  locale: string;
  setLocale: (data: string) => void;

  currentCursor: HTMLDivElement;
  setCurrentCursor: (currentCursor: HTMLDivElement) => void;

  progressBar: HTMLElement;
  setProgressBar: (progressBar: HTMLElement) => void;
}

export const GENERAL_STORE_NAME = async () => (await import('lodash')).default.kebabCase('General Store');
export const GENERAL_STORE_VERSION = 0.01;

export const useStore = create<StoreType>()((set, get) => ({
  locale: 'vi',
  setLocale: (locale) => set({ locale }),

  currentCursor: null,
  setCurrentCursor: (currentCursor) => set({ currentCursor }),

  progressBar: null,
  setProgressBar: (progressBar) => set({ progressBar }),
}));
