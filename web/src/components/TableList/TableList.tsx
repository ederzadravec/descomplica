import React from 'react';

import { TableListConfigItem, TableListItemOnSelect } from './types';
import * as S from './TableList.styled';
import TableHeader from './TableHeader';
import TableItem from './TableItem';

interface TableListProps {
  config: TableListConfigItem[];
  data: any[];
  onSelect: TableListItemOnSelect;
}

const TableList: React.FC<TableListProps> = ({ config, data, onSelect }) => {
  return (
    <S.Container>
      <TableHeader config={config} />

      <TableItem config={config} data={data} onSelect={onSelect} />

      {data?.length <= 0 && <S.NoData>Sem resultados</S.NoData>}
    </S.Container>
  );
};

export default TableList;
