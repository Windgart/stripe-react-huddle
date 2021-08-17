import { cartStatus, transactionStatus } from './cart';
import getUUID from 'react-uuid';

export const updateStatus = (item: CatObject) => {
  const { total, items } = cartStatus();
  const newTotal = total + item?.chargePrice;
  const newItem = { uuid: getUUID(), cat: item };
  cartStatus({
    total: newTotal,
    items: [...items, newItem],
  });
};

export const removeFromCart = (item: CartItem) => {
  const { items, total } = cartStatus();
  const filteredItems = items.filter(({ uuid }) => uuid !== item.uuid);
  const newTotal = total - item.cat.chargePrice;
  cartStatus({
    total: newTotal,
    items: filteredItems,
  });
};

export const lockTransaction = (
  totalToCharge: number,
  displayTotal: string,
  clientSecret: string
) => {
  const currentTransaction = transactionStatus();
  transactionStatus({
    total: totalToCharge,
    open: false,
    paymentIntent: clientSecret,
    displayTotal,
  });
};

export const resetTransaction = () => {
  transactionStatus({
    paymentIntent: '',
    total: 0,
    displayTotal: '$0.00',
    open: true,
  });
};

export const resetCart = () => {
  cartStatus({
    total: 0,
    items: [],
  });
};
