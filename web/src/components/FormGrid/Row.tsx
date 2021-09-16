import React from 'react';

import Grid from '../Grid/Grid';
import { Column } from './Column';
import * as Types from './types';

interface ITableGridRowProps {
  config: Types.ITableGridConfig[];
}

export const Row: React.FC<ITableGridRowProps> = ({ config }) => {
  return (
    <Grid container size={{ md: 12 }}>
      {config.map((column, key) => (
        <Column key={key} {...column} />
      ))}
    </Grid>
  );
};
