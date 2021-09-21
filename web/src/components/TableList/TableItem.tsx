import React from 'react';
import * as R from 'ramda';

import { TableListConfigItem, TableListItemOnSelect } from './types';
import * as S from './TableItem.styled';
import Grid from '../Grid/Grid';

interface TableitemProps {
  config: TableListConfigItem[];
  data: any[];
  onSelect: TableListItemOnSelect;
}

const TableItem: React.FC<TableitemProps> = ({ config, data, onSelect }) => {
  const getValue = (value: any, { dataPath }: TableListConfigItem): string => {
    const type = {
      String: () => R.path((dataPath as string).split('.'), value),
      Function: () => (dataPath as (row: any) => string)(value),
    };

    return type[R.type(dataPath) as 'String' | 'Function']() as string;
  };

  const handleOnClick = (item: AsyncGenerator) => {
    if (onSelect) onSelect(item);
  };

  return (
    <>
      {data.map((value) => (
        <S.Content key={JSON.stringify(value)} onClick={() => handleOnClick(value)}>
          <Grid container>
            {config.map((item) => (
              <Grid key={JSON.stringify(item)} size={item.size}>
                <S.Value>{getValue(value, item)}</S.Value>
              </Grid>
            ))}
          </Grid>
        </S.Content>
      ))}
    </>
  );
};

export default TableItem;
