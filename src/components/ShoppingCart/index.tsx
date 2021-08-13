import { FC } from 'react';
import { Container, ShoppingCartIcon, Circle } from './styles';
import { DisplaySubtitle } from 'components/Styled/typography';

const ShoppingCart: FC = () => {
  return (
    <Container>
      <ShoppingCartIcon />
      <Circle>0</Circle>
    </Container>
  );
};

export default ShoppingCart;
