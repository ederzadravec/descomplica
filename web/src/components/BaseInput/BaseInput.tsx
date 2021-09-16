import React from 'react';

import * as S from './BaseInput.styled';

interface IBaseInputProps {
  error?: string;
}

const BaseInput: React.FC<IBaseInputProps> = ({ error, children }) => {
  return (
    <S.Container>
      {children}

      <S.Error>{error}</S.Error>
    </S.Container>
  );
};

export default BaseInput;
