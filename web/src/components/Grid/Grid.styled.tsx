import styled from 'styled-components';

import { SIZES } from 'assets/theme';

import * as Types from './types';

export const Container = styled.div<{ spacing: number }>`
  display: flex;
  flex-direction: row;
  width: calc(100% + ${({ spacing }) => spacing}px);
  flex-wrap: wrap;
  justify-content: flex-start;
  margin-left: -${({ spacing }) => spacing / 2}px;
  margin-right: -${({ spacing }) => spacing / 2}px;
  transition: all ease 0.1s;
`;

export const Content = styled.div<{ size: Types.TGridSize; spacing: number }>`
  display: flex;
  flex-wrap: wrap;
  transition: all ease 0.1s;

  ${({ theme, size, spacing }) => `
    padding-left: ${spacing / 2}px;
    padding-right: ${spacing / 2}px;
    width: 100%;

    max-width: ${(100 / 12) * (size.xl || size.lg || size.md || size.sm || size.xs || 12)}%;

    ${Object.keys(size)
      .map((key: string) =>
        theme.screens[key as SIZES](`max-width:${(100 / 12) * (size[key as SIZES] || 12)}%`)
      )
      .join(';')}
  `};
`;
