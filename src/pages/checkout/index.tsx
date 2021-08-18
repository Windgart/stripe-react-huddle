import { FC, useState } from 'react';
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
import { useStripe, useElements, CardElement } from '@stripe/react-stripe-js';
import shootToast from 'utils/shootToast';
import CustomForm from 'components/customForm';
import MixForm from 'components/MixForm';

const Checkout: FC = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const { items } = useReactiveVar(cartStatus);
  const { displayTotal, paymentIntent } = useReactiveVar(transactionStatus);
  const h = useHistory();
  const stripe = useStripe();
  const elements = useElements();

  const cardRef = elements?.getElement(CardElement);

  const resetAll = () => {
    resetCart();
    resetTransaction();
  };

  const handlePayment = async () => {
    setLoading(true);
    if (stripe && elements && paymentIntent && cardRef) {
      const payload = await stripe.confirmCardPayment(paymentIntent, {
        payment_method: {
          card: cardRef,
        },
      });
      if (payload.error) {
        setLoading(false);
        shootToast('Payment method failed', 'error');
      } else {
        setLoading(false);

        resetTransaction();
        resetCart();
        h.push('/thankyou');
      }
    }
  };

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
        <BasicCard fullWidth contrast justify="flex-start" direction="column">
          {/*  -------- Out the box solution with Stripe Card element--------
          <Title1>Payment Info</Title1>
          <Separator contrast />
          <CardElement />
          <Separator contrast />
          <Button onClick={handlePayment} disabled={loading} color="secondary">
            {loading ? 'Wait' : 'Do the payment'}
          </Button> */}
          {/* ------using your own custom form
           */}
          {/* ----using a mix approach----- */}
          <CustomForm
            reset={resetAll}
            toast={shootToast}
            paymentIntent={paymentIntent}
          />
          <MixForm
            reset={resetAll}
            toast={shootToast}
            paymentIntent={paymentIntent}
          />
        </BasicCard>
      </SectionsContainers>
    </StandardContainer>
  );
};

export default Checkout;
