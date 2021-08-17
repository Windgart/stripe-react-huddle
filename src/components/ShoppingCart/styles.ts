import styled, { DefaultTheme } from 'styled-components';

interface StyleProps {
  iconClass?: string;
  isEmpty?: boolean;
  theme: DefaultTheme;
}

export const Container = styled.div`
  display: flex;
  width: auto;
  border-radius: 8px;
  justify-content: center;
  align-items: center;
`;

export const ShoppingCartIcon = styled.i.attrs(() => ({
  className: 'ri-shopping-cart-fill',
}))`
  color: ${({ theme }) => theme.palette.terracotta.terra};
  font-size: 25px;
  margin: 0 7px;
  cursor: pointer;
`;

export const Circle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-size: 10px;
  font-family: ${({ theme }) => theme.fonts.display};
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background-color: ${({ theme, isEmpty }: StyleProps) =>
    !isEmpty ? theme.palette.terracotta.terra : '#fc0330'};
  color: ${({ theme, isEmpty }: StyleProps) =>
    !isEmpty ? theme.palette.terracotta.main : 'white'};
`;
