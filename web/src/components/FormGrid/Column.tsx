import React from 'react';

import Grid from '../Grid/Grid';
import * as Types from './types';

export const Column: React.FC<Types.ITableGridConfig> = ({ type, schema, props, size, hide }) => {
  const Component =
    !hide || !hide()
      ? React.createElement(type, {
          name: schema,
          ...props(schema),
        })
      : null;

  return <Grid size={size}>{Component}</Grid>;
};
