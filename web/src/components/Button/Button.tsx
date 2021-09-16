import React from 'react';

import { COLORS } from 'assets/theme';

import * as S from './Button.styled';

interface ButtonProps {
  color?: COLORS;
  onClick: () => void;
}

const Button: React.FC<ButtonProps> = ({ color = 'primary', children, onClick }) => {
  return (
    <S.Container onClick={onClick} color={color}>
      {children}
    </S.Container>
  );
};

export default Button;
