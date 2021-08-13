import styled from 'styled-components';
import Background1 from 'assets/images/Clarence.png';

export const GlobalContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-image: url(${Background1});
  background-repeat: no-repeat;
  background-color: ${({ theme }) => theme.palette.terracotta.main};
  font-family: ${({ theme }) => theme.fonts.main};
  background-attachment: fixed;
`;
export const LayoutWrapper = styled.div`
  display: flex;
  flex: 1;
  width: 100%;
  height: 100%;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
export const Content = styled.div`
  display: flex;
  width: 90%;
  height: auto;
  margin-top: 40px;
  background-color: aliceblue;
`;
