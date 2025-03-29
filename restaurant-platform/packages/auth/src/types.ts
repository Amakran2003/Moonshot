export interface User {
  id: string;
  email: string;
  role: 'admin' | 'staff' | 'customer';
  restaurantId?: string;
}

export interface AuthStore {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}