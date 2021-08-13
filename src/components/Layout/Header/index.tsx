import { FC } from 'react';
import { FixedContainer, HeaderWrapper, TopContainers } from './styles';
import ShoppingCart from 'components/ShoppingCart';

import Logo from 'components/Logo';
import MainMenu from 'components/MainMenu';

const HeaderComponent: FC = () => {
  return (
    <FixedContainer>
      <HeaderWrapper>
        <TopContainers>
          <Logo />
          <MainMenu />
        </TopContainers>
        <TopContainers reversed>
          <ShoppingCart />
        </TopContainers>
      </HeaderWrapper>
    </FixedContainer>
  );
};

export default HeaderComponent;
