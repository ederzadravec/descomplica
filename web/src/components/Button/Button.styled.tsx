import styled from 'styled-components';

import { COLORS } from 'assets/theme';

export const Container = styled.button<{ color: COLORS }>`
  height: 44px;
  min-width: 120px;
  background: ${({ theme, color }) => theme.palette[color].main};
  color: ${({ theme, color }) => theme.palette[color].text};
  font-weight: bold;
  border-radius: 4px;
  border: none;
  cursor: pointer;
  transition: 0.4s;

  &:hover {
    box-shadow: 2px 2px 5px 1px rgba(0, 0, 0, 0.3);
  }
`;
