import React from 'react';
import { PuffLoader } from 'react-spinners';
import { ThemeContext } from 'styled-components';

import Show from '../Show/Show';

import { Row } from './Row';
import * as S from './FormGrid.styled';
import * as Types from './types';

interface ITableGrid {
  title?: string;
  config: Types.ITableGridConfig[][];
  noMargin?: boolean;
  loading?: boolean;
  onSubmit?: (e: React.FormEvent<HTMLFormElement>) => void;
}

const FormGrid: React.FC<ITableGrid> = ({
  config,
  title,
  children,
  noMargin,
  loading = false,
  onSubmit,
  ...props
}) => {
  const theme = React.useContext(ThemeContext);

  const handleOnSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    if (onSubmit) onSubmit(e);
  };

  return (
    <S.Container {...props}>
      <S.Content noMargin={noMargin ? 1 : 0} onSubmit={handleOnSubmit}>
        {title && <S.Title>{title}</S.Title>}

        <Show show={loading}>
          <S.Loading>
            <PuffLoader color={theme.palette.primary.main} />
          </S.Loading>
        </Show>

        <Show show={!loading}>
          {config.map((row, key) => (
            <Row key={key} config={row} />
          ))}

          {children}
        </Show>
      </S.Content>
    </S.Container>
  );
};

export default FormGrid;
