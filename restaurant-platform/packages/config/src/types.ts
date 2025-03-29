export interface RestaurantConfig {
  id: string;
  name: string;
  slug: string;
  theme: {
    primary: string;
    secondary: string;
    accent: string;
  };
  contact: {
    phone: string;
    email: string;
    address: string;
  };
  features: {
    onlineOrdering: boolean;
    tableReservations: boolean;
    delivery: boolean;
  };
}