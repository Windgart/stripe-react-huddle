import { FC, useState } from 'react';
import {
  CardWrapper,
  CatPicture,
  Container,
  ShopContainers,
  RamenCat,
  DetailsContainer,
  TopCardContainer,
  BottomCardContainer,
  CloseIcon,
} from './styles';
import { TextBoxContainer } from 'components/Styled/containers';
import { BasicCard } from 'components/Styled/cards';
import { catItems } from 'utils/constants';
import Ramen from 'assets/images/ramencat.gif';
import { DisplayText, Title1, Title2, BodyText } from 'components/Styled/typography';
import { Button } from 'components/Styled/buttons';

const Shop: FC = () => {
  interface CatObject {
    id: number;
    name: string;
    picture: string;
    description: string;
    displayPrice: string;
    chargePrice: number;
  }

  const [selectedCat, setSelectedCat] = useState<CatObject | null>(null);
  const handleClick = (cat: CatObject) => {
    setSelectedCat(cat);
  };
  const renderCatList = catItems.map((cat, index) => {
    return (
      <CardWrapper onClick={() => handleClick(cat)} key={`key-${cat.name}-${index}`}>
        <BasicCard hover centered column fullWidth contrast>
          <Title1 mb>{cat.name}</Title1>
          <CatPicture src={cat.picture} />
          <Title1 mb>{cat.displayPrice}</Title1>
        </BasicCard>
      </CardWrapper>
    );
  });
  return (
    <Container>
      <ShopContainers>{renderCatList}</ShopContainers>
      <ShopContainers reversed>
        <BasicCard noPadding column centered contrast>
          <DetailsContainer selected={!!selectedCat}>
            {!selectedCat ? (
              <>
                <RamenCat src={Ramen} />
                <Title2 mb> Just the best selection</Title2>
                <BodyText>Pick one of our tasty treats to get more information</BodyText>
              </>
            ) : (
              <>
                <TopCardContainer>
                  <Title2>{selectedCat.name}</Title2>
                  <CloseIcon role="button" tabIndex={0} onClick={() => setSelectedCat(null)} />
                </TopCardContainer>
                <CatPicture mt large src={selectedCat.picture} />
                <BottomCardContainer>
                  <Title2 contrast mb>
                    {selectedCat.displayPrice}
                  </Title2>
                  <BodyText>{selectedCat.description}</BodyText>
                  <Button contrast> Add to cart</Button>
                </BottomCardContainer>
              </>
            )}
          </DetailsContainer>
        </BasicCard>
      </ShopContainers>
    </Container>
  );
};

export default Shop;
