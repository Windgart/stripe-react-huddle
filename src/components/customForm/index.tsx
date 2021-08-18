import { FC, useState } from 'react';
import { useForm } from 'react-hook-form';
import {
  useCreatePaymentMethodMutation,
  CreatePaymentMethodMutation,
} from 'Apollo/generated/graphql';
import shootToast from 'utils/shootToast';
import {
  StandardContainer,
  Title1,
  Title2,
  Separator,
  Button,
  FormContainer,
  Input,
} from 'components/Styled';
import { useStripe } from '@stripe/react-stripe-js';
import { useHistory } from 'react-router-dom';

interface FormProps {
  paymentIntent: string;
  reset: () => void;
  toast: (message: string, type: 'success' | 'error' | 'warning') => void;
}

interface FormValues {
  name: string;
  cardNumber: number;
  expirationMonth: number;
  expirationYear: number;
  cvc: number;
}

const CustomForm: FC<FormProps> = ({ paymentIntent, reset, toast }) => {
  const h = useHistory();
  const [loadingPayment, setLoadingPayment] = useState<boolean>(false);
  const stripe = useStripe();
  const {
    register,
    formState: { errors },
    handleSubmit,
  } = useForm();

  const tryToPay = async (token: string) => {
    setLoadingPayment(true);
    if (stripe && paymentIntent) {
      const payload = await stripe.confirmCardPayment(paymentIntent, {
        payment_method: token,
      });
      if (payload.error) {
        setLoadingPayment(false);
        shootToast('something went wrong :c', 'error');
      } else {
        setLoadingPayment(false);
        reset();
        h.push('/thankyou');
      }
    }
  };

  const onCompletedPaymentMethod = (result: CreatePaymentMethodMutation) => {
    if (result.createPaymentMethod) {
      const { methodId } = result.createPaymentMethod.data;
      tryToPay(methodId);
    }
  };

  const [createPaymentMethod, { loading }] = useCreatePaymentMethodMutation({
    onCompleted: onCompletedPaymentMethod,
    onError: () => shootToast(' payment not accepted ;(', 'error'),
  });

  const handleSubmitCustomForm = (data: FormValues) => {
    const { cardNumber, expirationMonth, expirationYear, cvc } = data;
    const payload = {
      type: 'card',
      cardNumber: cardNumber.toString(),
      expMonth: Number(expirationMonth),
      expYear: Number(expirationYear),
      cvc: cvc.toString(),
    };
    createPaymentMethod({
      variables: {
        payload,
      },
    });
  };

  return (
    <StandardContainer direction="row" justify="flex-start">
      <FormContainer onSubmit={handleSubmit(handleSubmitCustomForm)}>
        <Title2>Payment Information</Title2>
        <Separator contrast />
        <StandardContainer spacedY direction="column" justify="flex-start">
          <Title1 mb>Name on card</Title1>
          <Input
            {...register('name', { required: true })}
            placeholder="Handsome Cat"
            status={!!errors.name ? 'error' : 'empty'}
          />
        </StandardContainer>
        <StandardContainer spacedY direction="column">
          <Title1 mb>Card number</Title1>
          <Input
            {...register('cardNumber', { required: true })}
            placeholder="0000-0000-0000-0000"
            status={!!errors.cardNumber ? 'error' : 'empty'}
          />
        </StandardContainer>
        <StandardContainer spacedY direction="column">
          <Title1 mb>Expiration date</Title1>
          <StandardContainer direction="row" justify="flex-start">
            <Input
              {...register('expirationMonth', { required: true })}
              placeholder="00"
              status={!!errors.expirationMonth ? 'error' : 'empty'}
              small
            />
            <Input
              {...register('expirationYear', { required: true })}
              status={!!errors.expirationYear ? 'error' : 'empty'}
              placeholder="00"
              spacedX
              small
            />
          </StandardContainer>
        </StandardContainer>
        <StandardContainer spacedY direction="column">
          <Title1 mb>CVC</Title1>
          <Input
            {...register('cvc', { required: true })}
            status={!!errors.cvc ? 'error' : 'empty'}
            small
          />
        </StandardContainer>
        <StandardContainer spacedY direction="row" justify="flex-end">
          <Button
            type="submit"
            disabled={loading || loadingPayment}
            color="secondary"
          >
            {loading || loadingPayment ? 'Wait..' : 'Do the payment!'}
          </Button>
        </StandardContainer>
      </FormContainer>
    </StandardContainer>
  );
};

export default CustomForm;
