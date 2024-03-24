import { v4 as uuidv4 } from 'uuid';

export type ProductType = {
  id: typeof uuidv4;
  name: string;
  description: string;
  price: number;
  stock: number;
};
