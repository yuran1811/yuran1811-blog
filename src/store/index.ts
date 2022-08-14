import create from 'zustand';

interface StoreType {
  currentCursor: HTMLDivElement;
  setCurrentCursor: (currentCursor: HTMLDivElement) => void;

  progressBar: HTMLElement;
  setProgressBar: (progressBar: HTMLElement) => void;
}

export const useStore = create<StoreType>()((set, get) => ({
  currentCursor: null,
  setCurrentCursor: (currentCursor) => set({ currentCursor }),

  progressBar: null,
  setProgressBar: (progressBar) => set({ progressBar }),
}));
