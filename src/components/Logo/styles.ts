import styled from 'styled-components';

interface StylesProps {
  upperText?: boolean;
}

export const Logo = styled.img`
  height: auto;
  width: 111px;
`;
export const LogoText = styled.h2`
  font-family: ${({ theme }) => theme.fonts.display};
  font-size: ${({ upperText }: StylesProps) => (upperText ? '24px' : '35px')};
  color: ${({ theme }) => theme.palette.terracotta.terra};
  line-height: 96%;
`;
export const LogoContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
`;

export const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const SmallLogoText = styled(LogoText)`
  font-size: 11px;
  margin-top: 6px;
`;
