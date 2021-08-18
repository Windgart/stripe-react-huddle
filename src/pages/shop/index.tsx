import { FC, useState, useEffect } from 'react';
import {
  CardWrapper,
  CatPicture,
  RamenCat,
  DetailsContainer,
  TopCardContainer,
  BottomCardContainer,
  CloseIcon,
} from './styles';
import {
  SectionsContainers,
  StandardContainer,
  BasicCard,
  Title1,
  Title2,
  BodyText,
  Button,
} from 'components/Styled';
import Ramen from 'assets/images/ramencat.gif';
import getCatPicture from 'utils/getCatPicture';
import { updateStatus, resetTransaction } from 'Apollo/reactiveVars/mutators';
import { useGetCatListQuery, Cat } from 'Apollo/generated/graphql';
import { useReactiveVar } from '@apollo/client';
import { transactionStatus } from 'Apollo/reactiveVars/cart';
import shootToast from 'utils/shootToast';

const Shop: FC = () => {
  const { loading, error, data } = useGetCatListQuery();
  const [selectedCat, setSelectedCat] = useState<Cat | null>(null);
  const [catList, setCatsList] = useState<Cat[] | null>(null);
  const { open } = useReactiveVar(transactionStatus);

  const handleClick = (cat: Cat) => {
    setSelectedCat(cat);
  };

  const handleAddToCart = () => {
    if (selectedCat) {
      updateStatus(selectedCat);
      shootToast(`${selectedCat.name} added to cart! 😻`, 'success');
    }
    if (!open) {
      resetTransaction();
    }
  };

  const renderCatList = () => {
    if (catList) {
      return catList?.map((cat: Cat, index: number) => {
        return (
          <CardWrapper
            onClick={() => handleClick(cat)}
            key={`key-${cat.name}-${index}`}
          >
            <BasicCard
              align="center"
              justify="center"
              hover
              direction="column"
              fullWidth
              contrast
            >
              <Title1 mb>{cat.name}</Title1>
              <CatPicture src={getCatPicture(cat.picture)} />
              <Title1 mb>{cat.displayPrice}</Title1>
            </BasicCard>
          </CardWrapper>
        );
      });
    }
  };

  useEffect(() => {
    if (data && !error) {
      const { catsList } = data;
      setCatsList(catsList);
    }
  }, [data, error]);

  return (
    <StandardContainer centered>
      {!loading ? (
        <>
          <SectionsContainers>
            {catList && !error ? renderCatList() : 'aw..'}
          </SectionsContainers>
          <SectionsContainers reversed>
            <BasicCard noPadding direction="column" justify="center" contrast>
              <DetailsContainer selected={!!selectedCat}>
                {!selectedCat ? (
                  <>
                    <RamenCat src={Ramen} />
                    <Title2 mb> Just the best selection</Title2>
                    <BodyText>
                      Pick one of our tasty treats to get more information
                    </BodyText>
                  </>
                ) : (
                  <>
                    <TopCardContainer>
                      <Title2>{selectedCat.name}</Title2>
                      <CloseIcon
                        role="button"
                        tabIndex={0}
                        onClick={() => setSelectedCat(null)}
                      />
                    </TopCardContainer>
                    <CatPicture
                      mt
                      large
                      src={getCatPicture(selectedCat.picture)}
                    />
                    <BottomCardContainer>
                      <Title2 contrast mb>
                        {selectedCat.displayPrice}
                      </Title2>
                      <BodyText>{selectedCat.description}</BodyText>
                      <Button color="main" onClick={handleAddToCart}>
                        Add to cart
                      </Button>
                    </BottomCardContainer>
                  </>
                )}
              </DetailsContainer>
            </BasicCard>
          </SectionsContainers>
        </>
      ) : (
        'loading'
      )}
    </StandardContainer>
  );
};

export default Shop;
