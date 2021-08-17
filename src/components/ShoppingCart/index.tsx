import { FC } from 'react';
import { Container, ShoppingCartIcon, Circle } from './styles';
import { useReactiveVar } from '@apollo/client';
import { cartStatus } from 'Apollo/reactiveVars/cart';
import { useHistory } from 'react-router';

const ShoppingCart: FC = () => {
  const { items } = useReactiveVar(cartStatus);
  const h = useHistory();
  const handleClick = () => h.push('/cart');
  return (
    <Container>
      <ShoppingCartIcon onClick={handleClick} role="button" tabIndex={0} />
      <Circle isEmpty={!!items.length}>{items.length}</Circle>
    </Container>
  );
};

export default ShoppingCart;
