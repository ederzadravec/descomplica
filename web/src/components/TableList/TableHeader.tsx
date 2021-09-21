import React from 'react';

import { TableListConfigItem } from './types';

import Grid from '../Grid/Grid';
import * as S from './TableHeader.styled';

interface TableHeaderProps {
  config: TableListConfigItem[];
}

const TableHeader: React.FC<TableHeaderProps> = ({ config }) => {
  return (
    <S.Container>
      <Grid container>
        {config.map((item) => (
          <Grid key={JSON.stringify(item)} size={item.size} spacing={0}>
            <S.Label>{item.label}</S.Label>
          </Grid>
        ))}
      </Grid>
    </S.Container>
  );
};

export default TableHeader;
