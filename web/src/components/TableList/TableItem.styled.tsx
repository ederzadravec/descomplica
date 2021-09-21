import styled from 'styled-components';

export const Container = styled.div`
  border-bottom-right-radius: 10px;
  border-bottom-left-radius: 10px;
  overflow: hidden;
`;

export const Content = styled.div`
  padding: 12px;

  &:nth-child(even) {
    background: rgba(0, 0, 0, 0.1);
  }

  &:hover {
    cursor: pointer;
    background: rgba(0, 0, 0, 0.15);
  }
`;

export const Value = styled.label`
  flex: 1;
  cursor: pointer;
  display: block;
  font-size: 14px;
  color: ${({ theme }) => theme.palette.text.dark};
`;
