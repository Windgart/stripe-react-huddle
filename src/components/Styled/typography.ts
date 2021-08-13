import styled, { DefaultTheme } from 'styled-components';

interface StyleProps {
  extraLarge?: boolean;
  contrast?: boolean;
  theme: DefaultTheme;
  mb?: boolean;
  mt?: boolean;
}

export const DisplayText = styled.h1`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ extraLarge }: StyleProps) => (extraLarge ? '98px' : '69px')};
`;

export const BodyText = styled.p`
  font-size: 12px;
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const DisplaySubtitle = styled.p`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: 11px;
  ${({ theme, contrast }: StyleProps) =>
    contrast
      ? `color: ${theme.palette.terracotta.terra};`
      : `color: ${theme.palette.terracotta.main};`}
`;

export const Title1 = styled(DisplaySubtitle)`
  font-size: 18px;
  margin-top: ${({ mt }) => (mt ? '10px' : '0')};
  margin-bottom: ${({ mb }) => (mb ? '10px' : '0')};
`;

export const Title2 = styled(Title1)`
  font-size: 24px;
`;
