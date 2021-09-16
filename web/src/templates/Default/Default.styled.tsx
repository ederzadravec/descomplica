import styled from 'styled-components';

export const Container = styled.div`
  width: 100vw;
  min-height: 100vh;
  align-items: center;
  background: ${({ theme }) => theme.palette.primary.main};
  padding: 24px;
  opacity: 0.8;
  background-image: ${({ theme }) =>
    `radial-gradient(#ffffff 1px, ${theme.palette.primary.main} 1px);`};
  background-size: 10px 10px;
  flex-direction: column;
`;

export const Content = styled.div`
  max-width: 1320px;
  width: 100%;
  min-height: 100%;
  background: #fff;
  border-radius: 12px;
  box-shadow: 2px 2px 10px 2px rgba(0, 0, 0, 0.4);
  padding: 24px;
  flex-direction: column;
`;
