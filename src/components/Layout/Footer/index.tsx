import { DisplaySubtitle } from 'components/Styled/typography';
import { FC } from 'react';
import { FixedContainer, FooterWrapper } from './styles';

const FooterComponent: FC = () => {
  return (
    <FixedContainer>
      <FooterWrapper>
        <DisplaySubtitle contrast>The Sketchy Company 2021</DisplaySubtitle>
      </FooterWrapper>
    </FixedContainer>
  );
};

export default FooterComponent;
