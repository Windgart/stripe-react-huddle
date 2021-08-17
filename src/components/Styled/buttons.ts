import styled, { DefaultTheme } from 'styled-components';

interface StyleProps {
  contrast?: boolean;
  color: 'main' | 'secondary' | 'red';
  theme: DefaultTheme;
}

export const Button = styled.button`
  width: auto;
  padding: 12px;
  border-radius: 8px;
  cursor: pointer;
  background-color: ${({ theme, color }) => {
    const { terra, abisso } = theme.palette.terracotta;
    if (color === 'red') {
      return '#fc0330';
    }
    if (color === 'secondary') {
      return abisso;
    }
    return terra;
  }};
  color: ${({ theme, color }: StyleProps) =>
    color === 'main'
      ? theme.palette.terracotta.abisso
      : theme.palette.terracotta.terra};
  font-family: ${({ theme }) => theme.fonts.display};
  text-align: center;
  :hover {
    background-color: ${({ theme, color }) => {
      if (color === 'red') {
        return '#fc264d';
      }
      if (color === 'secondary') {
        return theme.palette.terracotta.main;
      }
      return theme.palette.common.white;
    }};
  }
  :disabled {
    pointer-events: none;
    opacity: 0.7;
  }
`;
