export interface User {
  id: string;
  name: string;
  email: string;
  age: number;
  gender: "male" | "female" | "other";
  address: string | null;
  city: string | null;
  country: string | null;
  phoneNumber: string | null;
  cart: ShoppingCartItem[];
  favoriteItems: number[];
}

interface ShoppingCartItem {
  productId: number;
  quantity: number;
}
