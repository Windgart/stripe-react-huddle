import { ReactNode, FC } from 'react';
import { LayoutWrapper, GlobalContainer, Content } from './styles';
import Footer from './Footer';
import Header from './Header';

interface LayoutProps {
  children: ReactNode;
}

const Layout: FC<LayoutProps> = ({ children }: LayoutProps) => {
  return (
    <GlobalContainer>
      <LayoutWrapper>
        <Header />
        {children}
        <Footer />
      </LayoutWrapper>
    </GlobalContainer>
  );
};

export default Layout;
