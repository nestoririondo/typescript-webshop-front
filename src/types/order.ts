export type Order = {
  userId: string;
  addressId: string;
  products: {
    id: string;
    quantity: number;
    price: number;
  }[];
};
