import { FC, useEffect } from 'react';
import {
  Button,
  BasicCard,
  Separator,
  SectionsContainers,
  StandardContainer,
  Title1,
  Title2,
  DisplayText,
  DisplaySubtitle,
} from 'components/Styled';
import { useHistory } from 'react-router-dom';
import { cartStatus, transactionStatus } from 'Apollo/reactiveVars/cart';
import { useReactiveVar } from '@apollo/client';
import { CatItemPicture, ItemListContainer } from './styles';
import getCatPicture from 'utils/getCatPicture';
import { removeFromCart, lockTransaction } from 'Apollo/reactiveVars/mutators';
import Tally from 'components/tally';
import shootToast from 'utils/shootToast';
import {
  useCreatePaymentIntentMutation,
  CreatePaymentIntentMutation,
} from 'Apollo/generated/graphql';
import { resetTransaction } from 'Apollo/reactiveVars/mutators';

const CartDetails: FC = () => {
  const { items, total } = useReactiveVar(cartStatus);
  const { open, paymentIntent } = useReactiveVar(transactionStatus);
  const h = useHistory();
  const formatTotal = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  });

  const handleRemove = (item: CartItem) => {
    removeFromCart(item);
    if (paymentIntent) {
      resetTransaction();
    }
    shootToast(`${item.cat.name} removed 😿`, 'error');
  };

  const onErrorCreatePaymentIntent = () => {
    shootToast('Something bad happened 🙀!', 'warning');
  };

  const onCompletedGetClientSecret = (result: CreatePaymentIntentMutation) => {
    if (result.createPaymentIntent) {
      const { clientSecret } = result.createPaymentIntent.data;
      lockTransaction(total, formatTotal.format(total / 100), clientSecret);
    }
  };

  const [getClientSecret, { loading }] = useCreatePaymentIntentMutation({
    onCompleted: onCompletedGetClientSecret,
    onError: () => onErrorCreatePaymentIntent(),
    errorPolicy: 'all',
  });

  const handleCheckout = () => {
    const payload = {
      amount: total,
      currency: 'usd',
      paymentMethod: 'card',
    };
    getClientSecret({
      variables: {
        payload,
      },
    });
  };

  const renderList = () => {
    if (items.length) {
      return items.map((catItem, index) => {
        const { picture, name, displayPrice } = catItem.cat;
        return (
          <BasicCard
            align="center"
            spacedY
            justify="space-evenly"
            direction="row"
            fullWidth
            contrast
            key={catItem.uuid}
          >
            <Title1>#{index + 1}</Title1>
            <CatItemPicture src={getCatPicture(picture)} />
            <DisplaySubtitle>{name}</DisplaySubtitle>
            <DisplaySubtitle>{displayPrice}</DisplaySubtitle>
            <Button onClick={() => handleRemove(catItem)} color="red">
              Remove item
            </Button>
          </BasicCard>
        );
      });
    }
  };

  useEffect(() => {
    if (!open) h.push('/checkout');
  }, [open, h]);

  return (
    <StandardContainer justify="center" direction="row">
      <SectionsContainers
        direction="column"
        justify="center"
        setRelative
        useOverflow
        maxHeight="700"
        align="center"
      >
        <ItemListContainer>
          <BasicCard direction="row" justify="space-evenly" fullWidth>
            <Title1 contrast>
              {items.length > 0
                ? `Your items: ${items.length}`
                : 'Nothing here, go get some items!'}
            </Title1>
          </BasicCard>
        </ItemListContainer>
        {renderList()}
      </SectionsContainers>
      <SectionsContainers justify="flex-start" direction="column" reversed>
        <BasicCard fullWidth spacedX direction="column" justify="space-evenly">
          <Title2 contrast mb>
            Current total
          </Title2>
          {items && <Tally contrast items={items} />}
          <Separator />
          <DisplayText align="right" contrast>
            {formatTotal.format(total / 100)}
          </DisplayText>
          <Separator />
          {total > 0 && (
            <Button disabled={loading} onClick={handleCheckout} color="main">
              {loading ? 'Wait...' : 'Checkout'}
            </Button>
          )}
        </BasicCard>
      </SectionsContainers>
    </StandardContainer>
  );
};

export default CartDetails;
