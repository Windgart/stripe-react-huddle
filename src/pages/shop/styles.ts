import styled from 'styled-components';

interface StyleProps {
  large?: boolean;
  selected?: boolean;
  mt?: boolean;
}

export const CardWrapper = styled.div`
  width: 220px;
  display: flex;
  flex-direction: column;
  margin: 20px;
`;

export const CatPicture = styled.img`
  height: auto;
  width: ${({ large }: StyleProps) => (large ? '250px' : '130px')};
  margin-top: ${({ mt }: StyleProps) => (mt ? '25px' : '0')};
`;

export const RamenCat = styled(CatPicture)`
  width: 250px;
  margin: 40px 0;
`;

export const DetailsContainer = styled.div`
  display: flex;
  flex-flow: column wrap;
  justify-content: ${({ selected }: StyleProps) => (!selected ? 'center' : 'flex-start')};
  align-items: center;
  min-height: 500px;
  width: 310px;
  padding: 15px;
  position: relative;
`;

export const TopCardContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  position: relative;
`;

export const CloseIcon = styled.i.attrs(() => ({
  className: 'ri-close-circle-fill',
}))`
  position: absolute;
  right: 0%;
  font-size: 25px;
  cursor: pointer;
  color: ${({ theme }) => theme.palette.terracotta.abisso};
`;

export const BottomCardContainer = styled.div`
  position: absolute;
  bottom: 0%;
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: column;
  align-items: center;
  min-height: 110px;
  border-bottom-left-radius: 8px;
  background-color: ${({ theme }) => theme.palette.terracotta.abisso};
  color: ${({ theme }) => theme.palette.terracotta.terra};
  text-align: center;
  padding: 10px 0;
  p {
    padding: 0 20px;
  }
  button {
    margin: 15px 0;
  }
`;
