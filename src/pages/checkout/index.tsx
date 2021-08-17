import { FC, useEffect, useState } from 'react';
import {
  StandardContainer,
  BasicCard,
  Title1,
  Title2,
  SectionsContainers,
  Separator,
  Button,
} from 'components/Styled';
import { useReactiveVar } from '@apollo/client';
import { cartStatus, transactionStatus } from 'Apollo/reactiveVars/cart';
import { resetCart, resetTransaction } from 'Apollo/reactiveVars/mutators';
import Tally from 'components/tally';
import { useHistory } from 'react-router-dom';
import { useStripe, useElements } from '@stripe/react-stripe-js';
import shootToast from 'utils/shootToast';

interface FormValues {
  name: string;
  cardNumber: number;
  expirationMonth: number;
  expirationYear: number;
  cvc: number;
}

const Checkout: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { items } = useReactiveVar(cartStatus);
  const { displayTotal, paymentIntent } = useReactiveVar(transactionStatus);
  const h = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  return (
    <StandardContainer justify="space-between" direction="row">
      <SectionsContainers
        justify="flex-start"
        direction="column"
        reversed
        align="center"
      >
        <BasicCard contrast direction="column" align="center" justify="center">
          <Title2>Summary</Title2>
          <Separator contrast />
          <Tally items={items} />
          <Separator contrast />
          <StandardContainer
            direction="row"
            justify="space-between"
            align="center"
          >
            <Title1>Total</Title1>
            <Title1>{displayTotal}</Title1>
          </StandardContainer>
          <Separator contrast />
          <Button onClick={resetTransaction} color="secondary">
            Edit cart
          </Button>
        </BasicCard>
      </SectionsContainers>
      <SectionsContainers direction="column" justify="center">
        <BasicCard
          fullWidth
          contrast
          justify="flex-start"
          direction="column"
        ></BasicCard>
      </SectionsContainers>
    </StandardContainer>
  );
};

export default Checkout;
