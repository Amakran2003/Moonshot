import { create } from 'zustand';
import { AuthStore, User } from './types';

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  isAuthenticated: false,
  login: async (email: string, password: string) => {
    // TODO: Implement actual authentication logic
    const mockUser: User = {
      id: '1',
      email,
      role: 'staff',
      restaurantId: 'default'
    };
    set({ user: mockUser, isAuthenticated: true });
  },
  logout: () => {
    set({ user: null, isAuthenticated: false });
  }
}));