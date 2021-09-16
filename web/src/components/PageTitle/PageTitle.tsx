import React from 'react';

import { COLORS } from 'assets/theme';

import Button from '../Button/Button';
import * as S from './PageTitle.styled';

interface PageTitleProps {
  title: string;
  buttons?: {
    label: string;
    onClick: () => void;
    color?: COLORS;
  }[];
}

const PageTitle: React.FC<PageTitleProps> = ({ title, buttons }) => {
  return (
    <S.Container>
      <S.Title>{title}</S.Title>

      <S.Buttons>
        {buttons?.map((button) => (
          <Button color={button.color} onClick={button.onClick}>
            {button.label}
          </Button>
        ))}
      </S.Buttons>
    </S.Container>
  );
};

export default PageTitle;
