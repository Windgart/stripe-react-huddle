import { FC, useState } from 'react';
import {
  useStripe,
  useElements,
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
} from '@stripe/react-stripe-js';
import {
  StripeCardCvcElementChangeEvent,
  StripeCardExpiryElementChangeEvent,
  StripeCardNumberElementChangeEvent,
} from '@stripe/stripe-js';
import {
  StandardContainer,
  Title1,
  Title2,
  Separator,
  Button,
  PseudoInput,
} from 'components/Styled';
import theme from 'theme';
import { useHistory } from 'react-router-dom';

type ElementStatus = 'empty' | 'error' | 'completed';

interface FormProps {
  paymentIntent?: string;
  reset: () => void;
  toast: (message: string, type: 'success' | 'error' | 'warning') => void;
}

const MixComponent: FC<FormProps> = ({ paymentIntent, reset, toast }) => {
  const [cardNumberStatus, setCardNumberStatus] =
    useState<ElementStatus>('empty');
  const [loadingPayment, setLoadingPayment] = useState<boolean>(false);
  const [cardDateStatus, setCardDateStatus] = useState<ElementStatus>('empty');
  const [cardCVCStatus, setCardCVCStatus] = useState<ElementStatus>('empty');
  const { main, abanero, abisso } = theme.palette.terracotta;
  const stripe = useStripe();
  const elements = useElements();
  const cardRef = elements?.getElement(CardNumberElement);
  const h = useHistory();

  const styleSettings = {
    base: {
      fontWeight: '600',
      fontSize: '28px',
      color: abisso,
      '::placeholder': {
        color: main,
      },
    },
    invalid: {
      color: abanero,
    },
  };
  const cardNumberOptions = {
    style: {
      ...styleSettings,
    },
    placeholder: '0000 0000 0000 0000',
    showIcon: true,
  };
  const expDateOptions = {
    style: {
      ...styleSettings,
    },
    placeholder: '00/00',
  };
  const CVCOptions = {
    style: {
      ...styleSettings,
    },
    placeholder: '000',
  };

  const handleSubmit = async () => {
    setLoadingPayment(true);
    if (stripe && cardRef && paymentIntent) {
      const payload = await stripe.confirmCardPayment(paymentIntent, {
        payment_method: {
          card: cardRef,
        },
      });
      if (payload.error) {
        toast('Could not pay with that card 😿', 'error');
      } else {
        reset();
        h.push('/thankyou');
      }
    }
  };

  const handleOnChange = (
    event:
      | StripeCardCvcElementChangeEvent
      | StripeCardExpiryElementChangeEvent
      | StripeCardNumberElementChangeEvent,
    elementState: (state: ElementStatus) => void
  ) => {
    const { complete, error, empty } = event;
    if (error) {
      elementState('error');
    }
    if (complete) {
      elementState('completed');
    }
    if (!error && empty) {
      elementState('empty');
    }
  };

  return (
    <StandardContainer direction="column">
      <Title2>Payment Information</Title2>
      <Separator contrast />

      <StandardContainer spacedY direction="column">
        <Title1 mb>Card number</Title1>
        <CardNumberElement
          onChange={(e) => handleOnChange(e, setCardNumberStatus)}
          options={cardNumberOptions}
        />
        <PseudoInput status={cardNumberStatus} />
      </StandardContainer>
      <StandardContainer spacedY direction="column">
        <Title1 mb>Expiration date</Title1>
        <CardExpiryElement
          onChange={(e) => handleOnChange(e, setCardDateStatus)}
          options={expDateOptions}
        />
        <PseudoInput status={cardDateStatus} small />
        <StandardContainer
          direction="row"
          justify="flex-start"
        ></StandardContainer>
      </StandardContainer>
      <StandardContainer spacedY direction="column">
        <Title1 mb>CVC</Title1>
        <CardCvcElement
          onChange={(e) => handleOnChange(e, setCardCVCStatus)}
          options={CVCOptions}
        />
        <PseudoInput status={cardCVCStatus} small />
      </StandardContainer>
      <StandardContainer spacedY direction="row" justify="flex-end">
        <Button
          onClick={handleSubmit}
          disabled={loadingPayment}
          color="secondary"
        >
          {loadingPayment ? 'Wait..' : 'Do the payment!'}
        </Button>
      </StandardContainer>
    </StandardContainer>
  );
};

export default MixComponent;
