import React from 'react';

import * as S from './Default.styled';

const Default: React.FC = ({ children }) => {
  return (
    <S.Container>
      <S.Content>{children}</S.Content>
    </S.Container>
  );
};

export default Default;
