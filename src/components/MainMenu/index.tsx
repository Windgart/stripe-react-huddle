import { FC } from 'react';
import { MenuItem, Container } from './styles';

const MainMenu: FC = () => {
  return (
    <Container>
      <MenuItem to="/">Home</MenuItem>
      <MenuItem to="/shop">The Wares</MenuItem>
      <MenuItem to="/news">News</MenuItem>
      <MenuItem to="/contact">Contact</MenuItem>
    </Container>
  );
};

export default MainMenu;
