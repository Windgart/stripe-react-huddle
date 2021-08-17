import { FC } from 'react';
import countby from 'lodash.countby';
import {
  DisplaySubtitle,
  StandardContainer,
  Title1,
  DottedLine,
} from 'components/Styled';

interface Props {
  items: CartItem[];
  contrast?: boolean;
}

type PairedValues = [string, Number];

const Tally: FC<Props> = ({ items, contrast }) => {
  const renderDetails = () => {
    const extractedCats = items.map(({ cat }) => cat);
    const groupedItems: PairedValues[] = countby(extractedCats, 'name');
    return Object.entries(groupedItems).map((singleCat, index) => {
      return (
        <StandardContainer
          justify="space-between"
          direction="row"
          align="center"
          key={`key-${index + 1}`}
        >
          <Title1 contrast={contrast}>
            {singleCat[0]} x {singleCat[1]}
          </Title1>
          <DottedLine contrast={contrast} />
          <DisplaySubtitle contrast={contrast}>
            $ {typeof singleCat[1] === 'number' ? 20 * singleCat[1] : 'cant'}
          </DisplaySubtitle>
        </StandardContainer>
      );
    });
  };

  return (
    <StandardContainer justify="flex-start" direction="column">
      {renderDetails()}
    </StandardContainer>
  );
};

export default Tally;
