import React from 'react';
import { useHistory } from 'react-router-dom';

import { PageTitle, TableList } from 'components';

const Form: React.FC = () => {
  const history = useHistory();

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
  ];

  return (
    <>
      <PageTitle
        title="Usuários"
        buttons={[{ label: 'Novo', onClick: handleOnCreate, color: 'success' }]}
      />

      <TableList
        config={tableConfig}
        data={[{ name: 'eder' }, { name: 'eder' }]}
        onSelect={handleOnSelect}
      />
    </>
  );
};

export default Form;
