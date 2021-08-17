import styled from 'styled-components';

interface StyleProps {
  fullWidth?: boolean;
  contrast?: boolean;
  outlined?: boolean;
  hover?: boolean;
  noPadding?: boolean;
  direction: 'column' | 'row';
  justify: 'center' | 'flex-start' | 'flex-end' | 'space-between' | 'space-around' | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end';
  spacedY?: boolean;
  spacedX?: boolean;
}

export const BasicCard = styled.div`
  display: flex;
  width: ${({ fullWidth }: StyleProps) => (fullWidth ? '100%' : 'auto')};
  border-radius: 8px;
  ${({ outlined, theme }) =>
    outlined ? `border: 1px solid ${theme.palette.terracotta.terra}` : ''};
  box-shadow: 0px 3px 54px rgba(0, 0, 0, 0.1);
  background-color: ${({ contrast, theme }) =>
    contrast ? theme.palette.terracotta.terra : theme.palette.terracotta.abisso};
  padding: ${({ noPadding }) => (noPadding ? '0' : '15px')};
  flex-direction: ${({ direction }) => direction};
  justify-content: ${({ justify }) => justify};
  box-shadow: 0px 3px 14px rgba(0, 0, 0, 0.2);
  align-items: ${({ align }) => align};
  cursor: ${({ hover }) => (hover ? 'pointer' : 'auto')};
  transition: all 0.2s ease-in;
  margin: ${({ spacedY, spacedX }) => `${spacedY ? '15px' : ''} ${spacedX ? '15px' : ''}`};
  ${({ hover }) =>
    hover
      ? `
  :hover {
    transform: scale(1.1);
  }
  `
      : ''};
`;
