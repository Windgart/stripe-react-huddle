import styled from 'styled-components';

interface StyleProps {
  src: string;
}

export const CatItemPicture = styled.div`
  display: flex;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background-image: url(${({ src }: StyleProps) => src});
  background-position: center;
  background-size: cover;
`;

export const ItemListContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  position: sticky;
  top: 0%;
  margin-bottom: 20px;
`;

export const Separator = styled.div`
  display: flex;
  width: 100%;
  height: 3px;
  border-radius: 50%;
  background-color: ${({ theme }) => theme.palette.terracotta.terra};
  margin: 20px 0;
`;
