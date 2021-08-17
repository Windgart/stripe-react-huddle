import styled, { DefaultTheme } from 'styled-components';

interface StyleProps {
  contrast?: boolean;
  theme: DefaultTheme;
}

export const Separator = styled.div`
  display: flex;
  width: 100%;
  height: 3px;
  border-radius: 18px;
  background-color: ${({ theme, contrast }: StyleProps) =>
    contrast
      ? theme.palette.terracotta.abisso
      : theme.palette.terracotta.terra};
  margin: 20px 0;
`;

export const DottedLine = styled.hr`
  display: flex;
  flex: 1;
  margin: 0 15px;
  height: 1px;
  border-top: 1px dotted
    ${({ contrast, theme }: StyleProps) =>
      contrast ? 'white' : theme.palette.terracotta.abisso};
`;
