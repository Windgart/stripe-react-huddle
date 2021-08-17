import { animated } from 'react-spring';
import styled, { DefaultTheme } from 'styled-components';

interface StyleProps {
  centered?: boolean;
  reversed?: boolean;
  column?: boolean;
  theme: DefaultTheme;
  maxHeight?: string;
  useOverflow?: boolean;
  setRelative?: boolean;
  spacedY?: boolean;
  justify?:
    | 'center'
    | 'flex-start'
    | 'flex-end'
    | 'space-between'
    | 'space-around'
    | 'space-evenly';
  align?: 'center' | 'flex-start' | 'flex-end';
  direction?: 'column' | 'row';
}

export const GlobalContainer = styled.div`
  display: flex;
  min-height: 100vh;
  flex-direction: column;
  background-color: ${({ theme }) => theme.palette.terracotta.main};
  font-family: ${({ theme }) => theme.fonts.main};
`;

export const RouteWrapper = styled.div`
  .fade-enter {
    opacity: 0;
    z-index: 1;
  }

  .fade-enter.fade-enter-active {
    opacity: 1;
    transition: opacity 250ms ease-in;
  }
  display: flex;
  width: 90%;
  justify-content: center;
  height: auto;
`;

export const AbsoluteWrapper = styled.div`
  display: flex;
  width: 100%;
  position: absolute;
  height: auto;
`;

export const TextBoxContainer = styled.div`
  width: 400px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: ${({ centered }: StyleProps) =>
    centered ? 'center' : 'space-between'};
  color: ${({ theme }) => theme.palette.terracotta.terra};
  margin-left: 30px;
`;

export const AnimatedDiv = styled(animated.div)`
  width: 100%;
  display: flex;
  height: auto;
`;

export const SectionsContainers = styled.div`
  display: flex;
  width: ${({ reversed }: StyleProps) => (reversed ? '30%' : '70%')};
  justify-content: center;
  flex-wrap: wrap;
  overflow-y: ${({ useOverflow }) => (useOverflow ? 'scroll' : 'auto')};
  max-height: ${({ maxHeight }) => (!!maxHeight ? `${maxHeight}px` : '')};
  ${({ setRelative }) => (setRelative ? 'position: relative;' : '')}
  ::-webkit-scrollbar {
    width: 0; /* Remove scrollbar space */
  }
  scrollbar-width: none;
  align-items: ${({ align }) => align};
`;

export const StandardContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: ${({ direction }: StyleProps) => direction};
  justify-content: ${({ justify }: StyleProps) => justify};
  align-items: ${({ align }) => align};
  overflow: hidden;
  ${({ spacedY }: StyleProps) => (spacedY ? 'margin: 12px 0;' : '')}
`;

export const FormContainer = styled.form`
  display: flex;
  width: 100%;
  flex-direction: column;
`;
