import { create } from 'zustand'

type UiState = {
  isLoading: boolean
  isMenuOpen: boolean
  setLoading: (value: boolean) => void
  closeMenu: () => void
  toggleMenu: () => void
}

export const useUiStore = create<UiState>((set) => ({
  isLoading: true,
  isMenuOpen: false,
  setLoading: (value) => set({ isLoading: value }),
  closeMenu: () => set({ isMenuOpen: false }),
  toggleMenu: () => set((state) => ({ isMenuOpen: !state.isMenuOpen })),
}))
