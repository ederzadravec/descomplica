import styled from 'styled-components';

export const Container = styled.span`
  position: relative;
  flex: 1;
  flex-direction: column;
  margin-bottom: 16px;
  transition: 0.4s;
`;

export const Error = styled.span`
  font-size: 12px;
  color: ${({ theme }) => theme.palette.error.main};
  padding: 0 8px;
  margin-top: 4px;
`;
