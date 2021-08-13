import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const MenuItem = styled(Link)`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 16px;
  color: ${({ theme }) => theme.palette.terracotta.terra};
  margin: 0 15px;
  text-decoration: none;
`;

export const Container = styled.div`
  display: flex;
  width: auto;
  padding: 10px 14px;
  justify-content: center;
  align-items: center;
  border-radius: 16px;
  margin-top: 13px;
  margin-left: 50px;
  /* box-shadow: 0px 2px 54px rgba(0, 0, 0, 0.2); */

  /* background-color: ${({ theme }) => theme.palette.terracotta.aqua}; */
`;
