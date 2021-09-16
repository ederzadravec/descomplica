import React from 'react';

import { PageTitle } from 'components';

const Students: React.FC = () => {
  return (
    <>
      <PageTitle title="Estudantes" buttons={[{ label: 'Novo Usuário', onClick: () => {} }]} />
    </>
  );
};

export default Students;
