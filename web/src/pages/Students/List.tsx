import React from 'react';
import { useHistory } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { cpf } from 'cpf-cnpj-validator';

import { PageTitle, TableList } from 'components';
import { dbToDate } from 'utils/date';

import { STUDENTS } from './graphql';

const Form: React.FC = () => {
  const history = useHistory();
  const students = useQuery(STUDENTS, { fetchPolicy: 'network-only' });

  const handleOnCreate = () => {
    history.push('/students/new');
  };

  const handleOnSelect = (row: any) => {
    history.push(`/students/edit/${row.id}`);
  };

  const tableConfig = [
    {
      label: 'Nome',
      size: { md: 3 },
      dataPath: 'name',
    },
    {
      label: 'CPF',
      size: { md: 2 },
      dataPath: (row: any) => cpf.format(row.cpf),
    },
    {
      label: 'E -mail',
      size: { md: 3 },
      dataPath: 'email',
    },
    {
      label: 'Criação',
      size: { md: 2 },
      dataPath: (row: any) => dbToDate(row.updatedAt),
    },
    {
      label: 'Edição',
      size: { md: 2 },
      dataPath: (row: any) => dbToDate(row.updatedAt),
    },
  ];

  const data = students?.data?.students?.data || [];

  return (
    <>
      <PageTitle
        title="Usuários"
        buttons={[{ label: 'Novo', onClick: handleOnCreate, color: 'success' }]}
      />

      <TableList config={tableConfig} data={data} onSelect={handleOnSelect} />
    </>
  );
};

export default Form;
