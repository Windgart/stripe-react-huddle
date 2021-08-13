import { FC } from 'react';
import { RamenCatImage, Container, ButtonContainer, LeftImage } from './styles';
import { useHistory } from 'react-router-dom';
import { DisplayText, BodyText } from 'components/Styled/typography';
import RamenCat from 'assets/images/ramencat.gif';
import { BasicCard } from 'components/Styled/cards';
import { Button } from 'components/Styled/buttons';
import CatCombo from 'assets/images/catFood.png';
import { TextBoxContainer } from 'components/Styled/containers';

const Landing: FC = () => {
  const history = useHistory();
  const handleClick = () => history.push('/shop');
  return (
    <Container>
      <LeftImage src={CatCombo} alt="the cats" />
      <TextBoxContainer>
        <DisplayText extraLarge>Well</DisplayText>
        <DisplayText>hello there!</DisplayText>
        <BodyText>
          Why yes, our wares are totally legal, for the right price that is. <br />
          Go ahead and check if something fancy you, we certainly have something for every taste!
        </BodyText>
        <ButtonContainer>
          <Button onClick={handleClick}>Start shopping</Button>
        </ButtonContainer>
      </TextBoxContainer>
    </Container>
  );
};

export default Landing;
