import styled from 'styled-components';

export const FixedContainer = styled.div`
  display: flex;
  width: 100%;
  min-height: 90px;
  position: fixed;
  bottom: 0%;
  border-top: 4px solid ${({ theme }) => theme.palette.terracotta.main};
  background-color: ${({ theme }) => theme.palette.terracotta.abisso};
`;

export const FooterWrapper = styled.div`
  display: flex;
  width: 90%;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.palette.terracotta.terra};
`;
