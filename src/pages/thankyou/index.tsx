import { FC, useEffect } from 'react';
import {
  StandardContainer,
  DisplayText,
  BodyText,
  Button,
} from 'components/Styled';
import { useHistory } from 'react-router';
import TYCat from 'assets/images/tycat.gif';

const Thankyou: FC = () => {
  const h = useHistory();

  return (
    <StandardContainer justify="center" align="center" direction="column">
      <img src={TYCat} alt="thank you!" />
      <DisplayText mb contrast>
        Thank you!
      </DisplayText>
      <br />
      <BodyText>Your payment has been processed </BodyText>
      <br />
      <Button onClick={() => h.push('/shop')} color="secondary">
        Back to the store
      </Button>
    </StandardContainer>
  );
};

export default Thankyou;
