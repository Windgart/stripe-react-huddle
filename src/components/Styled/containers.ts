import { animated } from 'react-spring';
import styled from 'styled-components';

interface StyleProps {
  centered?: boolean;
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
  justify-content: ${({ centered }: StyleProps) => (centered ? 'center' : 'space-between')};
  color: ${({ theme }) => theme.palette.terracotta.terra};
  margin-left: 30px;
`;

export const AnimatedDiv = styled(animated.div)`
  width: 100%;
  display: flex;
  height: auto;
`;
