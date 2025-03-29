import { RestaurantConfig } from './types';

export const defaultConfig: RestaurantConfig = {
  id: 'default',
  name: 'Restaurant Name',
  slug: 'restaurant-name',
  theme: {
    primary: '#2563eb',
    secondary: '#1e40af',
    accent: '#60a5fa'
  },
  contact: {
    phone: '+1 234 567 890',
    email: 'contact@restaurant.com',
    address: '123 Restaurant Street, City, Country'
  },
  features: {
    onlineOrdering: true,
    tableReservations: true,
    delivery: true
  }
};

export type { RestaurantConfig };
export * from './types';