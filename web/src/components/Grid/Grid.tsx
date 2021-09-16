import React from 'react';

import * as Types from './types';
import * as S from './Grid.styled';

interface IGrid {
  spacing?: number;
  container?: boolean;
  size: Types.TGridSize;
}

const Grid: React.FC<IGrid> = ({ container, children, spacing = 24, ...props }) => {
  return container ? (
    <S.Container spacing={spacing} {...props}>
      {children}
    </S.Container>
  ) : (
    <S.Content spacing={spacing} {...props}>
      {children}
    </S.Content>
  );
};

export default Grid;
