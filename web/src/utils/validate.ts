import { cpf } from 'cpf-cnpj-validator';

export type TValidate = [(value: any, form: any) => any, string];

const removeSpace = (value: string): string => value?.toString()?.replace(/\s/, '') || '';

const isEmpty = (message?: string): TValidate => [
  (value: string) => !removeSpace(value).length,
  message || 'Campo deve ser preenchido',
];

const isCPF = (message?: string): TValidate => [
  (value: string) => !cpf.isValid(value),
  message || 'CPF inválido',
];

const isEmail = (message?: string): TValidate => [
  (value) => !value.match(/^[a-z0-9._-]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i)?.length,
  message || 'Email inválido',
];

export default {
  isEmpty,
  isCPF,
  isEmail,
};
