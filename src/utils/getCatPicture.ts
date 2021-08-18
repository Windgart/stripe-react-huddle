import pizza from 'assets/svg/pizza.svg';
import spaghetti from 'assets/svg/spaghetti.svg';
import cake from 'assets/svg/cake.svg';
import donut from 'assets/svg/donut.svg';
import watermelon from 'assets/svg/watermelon.svg';
import jelly from 'assets/svg/jelly.svg';

const pictures = [
  { name: 'pizza', picture: pizza },
  { name: 'spaghetti', picture: spaghetti },
  { name: 'cake', picture: cake },
  { name: 'donut', picture: donut },
  { name: 'watermelon', picture: watermelon },
  { name: 'jelly', picture: jelly },
];

const getCatPicture = (pictureName: string): string => {
  const match = pictures.find(({ name }) => name === pictureName);
  if (match) {
    return match.picture;
  }
  return '';
};
export default getCatPicture;
