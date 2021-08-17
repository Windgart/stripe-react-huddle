declare interface CatObject {
  id: number;
  name: string;
  picture: string;
  description: string;
  displayPrice: string;
  chargePrice: number;
}

declare interface IKart {
  total: number;
  items: CartItem[];
}

declare module 'lodash.countby';
