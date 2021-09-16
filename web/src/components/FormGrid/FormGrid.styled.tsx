import styled from 'styled-components';

export const Container = styled.div`
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 48px;
`;

export const Loading = styled.div`
  flex: 1;
  height: 250px;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.form<{ noMargin: number }>`
  max-width: 950px;
  width: 100%;
  margin: 0 ${({ noMargin }) => (noMargin ? 0 : 48)}px;
`;

export const Title = styled.span`
  display: block;
  width: 100%;
  text-align: center;
  font-size: 30px;
  margin-bottom: 48px;
`;
