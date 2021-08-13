import styled from 'styled-components';

interface StyleProps {
  reversed?: boolean;
}

export const TopContainers = styled.div`
  display: flex;
  width: ${({ reversed }) => (reversed ? '30%' : '70%')};
  justify-content: ${({ reversed }: StyleProps) => (reversed ? 'flex-end' : 'flex-start')};
  padding: 0 20px;
  align-items: center;
`;

export const HeaderWrapper = styled.div`
  display: flex;
  width: 90%;
  margin: 15px 0;
  justify-content: center;
`;

export const FixedContainer = styled.div`
  display: flex;
  width: 100%;
  justify-content: center;
  position: fixed;
  top: 0%;
  min-height: 40px;
`;
