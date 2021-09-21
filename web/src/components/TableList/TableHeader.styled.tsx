import styled from 'styled-components';

export const Container = styled.div`
  padding: 12px;
  background: ${({ theme }) => theme.palette.primary.main};
  border-top-left-radius: 10px;
  border-top-right-radius: 10px;
  text-align: center;
`;

export const Label = styled.label`
  flex: 1;
  font-size: 16px;
  font-weight: bold;
  color: ${({ theme }) => theme.palette.primary.text};
  text-align: center;
`;
