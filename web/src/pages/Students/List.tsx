import React from 'react';
import { useHistory } from 'react-router-dom';

import { PageTitle } from 'components';

const Form: React.FC = () => {
  const history = useHistory();

  const handleOnCreate = () => {
    history.push('/students/new');
  };

  return (
    <>
      <PageTitle
        title="Usuários"
        buttons={[{ label: 'Novo', onClick: handleOnCreate, color: 'success' }]}
      />
    </>
  );
};

export default Form;
