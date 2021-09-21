import React from 'react';
import { useHistory, useParams } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { cpf } from 'cpf-cnpj-validator';

import { PageTitle, FormGrid, TextInput } from 'components';
import { useForm } from 'hooks';
import validate from 'utils/validate';
import { formatError } from 'utils/graphql';

import { CREATE, UPDATE, STUDENT } from './graphql';

const validations = {
  name: [validate.isEmpty()],
  cpf: [validate.isEmpty(), validate.isCPF()],
  email: [validate.isEmpty(), validate.isEmail()],
};

const Form: React.FC = () => {
  const history = useHistory();
  const params = useParams<{ student: string }>();

  const student = useQuery(STUDENT, {
    variables: { filter: { id: parseInt(params.student) } },
    skip: !params.student,
  });
  const [create] = useMutation(CREATE);
  const [update] = useMutation(UPDATE);

  const [form, onChange] = useForm({ validations });

  const fetchStudent = async () => {
    const data = student.data.student;

    form.setValues({
      ...data,
      cpf: cpf.format(data.cpf),
    });
  };

  React.useEffect(() => {
    if (student.data?.student) fetchStudent();
  }, [student]);

  const handleOnSubmit = async () => {
    const data = {
      name: form.values.name,
      cpf: form.values.cpf,
      email: form.values.email,
    };

    const result = params.student
      ? await update({ variables: { student: parseInt(params.student), data } }).then(
          (item: any) => item.data.updateStudent
        )
      : await create({ variables: { data } }).then((item: any) => item.data.createStudent);

    if (result.error) {
      form.setErrors(formatError(result.fields));
      return;
    }

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
          mask: 'cpf',
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
