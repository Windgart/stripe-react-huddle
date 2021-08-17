import styled, { DefaultTheme } from 'styled-components';

interface StyleProps {
  status?: 'error' | 'completed' | 'empty';
  theme: DefaultTheme;
  maxWidth?: string;
  small?: boolean;
  spacedX?: boolean;
}

export const PseudoInput = styled.div`
  display: flex;
  width: ${({ small }) => (small ? '65px' : 'auto')};
  height: auto;
  /* border-radius: 6px; */
  padding: 10px 10px;
  /* background-color: ${({ theme }) => theme.palette.terracotta.abisso}; */
  border-top: 3px solid
    ${({ status, theme }: StyleProps) => {
      const { abanero, aqua, abisso } = theme.palette.terracotta;
      if (status === 'error') {
        return abanero;
      }
      if (status === 'completed') {
        return aqua;
      }
      return abisso;
    }};
`;

export const Input = styled.input`
  display: flex;
  width: ${({ small }) => (small ? '50px' : 'auto')};
  text-transform: uppercase;
  font-size: 28px;
  color: ${({ theme }) => theme.palette.terracotta.terra};
  border-radius: 6px;
  padding: 10px 10px;
  ${({ spacedX }) => (spacedX ? 'margin-left: 17px;' : '')}
  background-color: ${({ theme }) => theme.palette.terracotta.abisso};
  border: 3px solid
    ${({ status, theme }: StyleProps) => {
      const { abanero, aqua, abisso } = theme.palette.terracotta;
      if (status === 'error') {
        return abanero;
      }
      if (status === 'completed') {
        return aqua;
      }
      return abisso;
    }};
`;
