import { FC } from 'react';
import { useHistory } from 'react-router-dom';
import { Container, ButtonContainer, LeftImage } from './styles';
import { DisplayText, BodyText, Button } from 'components/Styled';
import { TextBoxContainer } from 'components/Styled/containers';
import CatCombo from 'assets/images/catFood.png';

const Landing: FC = () => {
  const history = useHistory();
  const handleClick = () => history.push('/shop');
  return (
    <Container>
      <LeftImage src={CatCombo} alt="the cats" />
      <TextBoxContainer direction="column">
        <DisplayText contrast extraLarge>
          Well
        </DisplayText>
        <DisplayText contrast>hello there!</DisplayText>
        <BodyText>
          Why yes, our wares are totally legal, for the right price that is.{' '}
          <br />
          Go ahead and check if something fancy you, we certainly have something
          for every taste!
        </BodyText>
        <ButtonContainer>
          <Button color="main" onClick={handleClick}>
            Start shopping
          </Button>
        </ButtonContainer>
      </TextBoxContainer>
    </Container>
  );
};

export default Landing;
