import styled, { DefaultTheme } from 'styled-components';

interface StyleProps {
  contrast?: boolean;
  theme: DefaultTheme;
}

export const Button = styled.button`
  width: auto;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme }) => theme.palette.terracotta.terra};
  color: ${({ theme, contrast }: StyleProps) =>
    !contrast ? theme.palette.terracotta.main : theme.palette.terracotta.abisso};
  font-family: ${({ theme }) => theme.fonts.display};
  text-align: center;
  :hover {
    background-color: ${({ theme }) => theme.palette.common.white};
  }
`;
