import React from 'react';
import { useHistory } from 'react-router-dom';

import { PageTitle, FormGrid, TextInput } from 'components';
import { useForm } from 'hooks';
import validate from 'utils/validate';

const validations = {
  name: [validate.isEmpty()],
  cpf: [validate.isEmpty(), validate.isCPF()],
  email: [validate.isEmpty(), validate.isEmail()],
};

const Form: React.FC = () => {
  const history = useHistory();

  const [form, onChange] = useForm({ validations });

  const handleOnSubmit = () => {
    handleOnBack();
  };

  const handleOnBack = () => {
    history.push('/students');
  };

  const formConfig = [
    [
      {
        schema: 'name',
        size: { md: 12 },
        type: TextInput,
        props: (schema: string) => ({
          label: 'Nome',
          value: form.getValue(schema),
          error: form.getError(schema),
          onChange: onChange(schema),
        }),
      },
    ],
    [
      {
        schema: 'cpf',
        size: { md: 6, xs: 12 },
        type: TextInput,
        props: (schema: string) => ({
          label: 'CPF',
          value: form.getValue(schema),
          error: form.getError(schema),
          onChange: onChange(schema),
        }),
      },
      {
        schema: 'email',
        size: { md: 6, xs: 12 },
        type: TextInput,
        props: (schema: string) => ({
          label: 'E-mail',
          value: form.getValue(schema),
          error: form.getError(schema),
          onChange: onChange(schema),
        }),
      },
    ],
  ];

  return (
    <>
      <PageTitle
        title="Usuários"
        buttons={[
          { label: 'Voltar', onClick: handleOnBack, color: 'error' },
          { label: 'Salvar', onClick: form.trySave(handleOnSubmit), color: 'success' },
        ]}
      />

      <FormGrid title="Cadastro de usuário" config={formConfig} />
    </>
  );
};

export default Form;
