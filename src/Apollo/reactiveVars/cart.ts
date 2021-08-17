import { makeVar } from '@apollo/client';

interface IKart {
  total: number;
  items: CartItem[];
}

interface ITransactionStatus {
  paymentIntent: string;
  total: number;
  displayTotal: string;
  open: boolean;
}

export const cartStatus = makeVar<IKart>({
  total: 0,
  items: [],
});

export const transactionStatus = makeVar<ITransactionStatus>({
  paymentIntent: '',
  total: 0,
  displayTotal: '$0.00',
  open: true,
});
