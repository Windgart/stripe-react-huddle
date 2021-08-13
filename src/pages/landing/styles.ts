import styled from 'styled-components';

export const RamenCatImage = styled.img`
  width: auto;
`;

export const Container = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  justify-content: center;
  flex-direction: row;
  align-items: center;
  background-repeat: no-repeat;
  background-position-x: right;
  background-position-y: 160%;

  /* box-shadow: 0px 3px 54px rgba(0, 0, 0, 0.1); */
  /* background-size: cover; */
`;

export const GreetingsContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  color: ${({ theme }) => theme.palette.terracotta.terra};
  margin-left: 30px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  width: 100%;
  margin: 20px 0;
  justify-content: flex-end;
`;

export const LeftImage = styled.img`
  height: auto;
  width: 600px;
`;
