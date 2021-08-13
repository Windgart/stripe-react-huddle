import { FC } from 'react';
import CatLogoSVG from 'assets/svg/catlogo.svg';
import { Logo, LogoContainer, TextContainer, LogoText, SmallLogoText } from './styles';

const LogoComponent: FC = () => {
  return (
    <LogoContainer>
      <Logo src={CatLogoSVG} />
      <TextContainer>
        <LogoText upperText>Sketchy</LogoText>
        <LogoText>Emporium</LogoText>
        <SmallLogoText>We have stuff if you have coin</SmallLogoText>
      </TextContainer>
    </LogoContainer>
  );
};

export default LogoComponent;
