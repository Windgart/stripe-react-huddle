import styled from 'styled-components';

interface StyleProps {
  fullWidth?: boolean;
  contrast?: boolean;
  outlined?: boolean;
  column?: boolean;
  centered?: boolean;
  hover?: boolean;
  noPadding?: boolean;
}

export const BasicCard = styled.div`
  display: flex;
  width: ${({ fullWidth }: StyleProps) => (fullWidth ? '100%' : 'auto')};
  border-radius: 8px;
  ${({ outlined, theme }) =>
    outlined ? `border: 1px solid ${theme.palette.terracotta.terra}` : ''};
  box-shadow: 0px 3px 54px rgba(0, 0, 0, 0.1);
  background-color: ${({ contrast, theme }) =>
    contrast ? theme.palette.terracotta.terra : theme.palette.terracotta.main};
  padding: ${({ noPadding }) => (noPadding ? '0' : '15px')};
  flex-direction: ${({ column }) => (column ? 'column' : 'row')};
  justify-content: ${({ centered }) => (centered ? 'center' : 'flex-start')};
  box-shadow: 0px 3px 54px rgba(0, 0, 0, 0.2);
  align-items: ${({ centered }) => (centered ? 'center' : 'flex-start')};
  cursor: ${({ hover }) => (hover ? 'pointer' : 'auto')};
  transition: all 0.2s ease-in;
  ${({ hover }) =>
    hover
      ? `
  :hover {
    transform: scale(1.1);
  }
  `
      : ''}
`;
