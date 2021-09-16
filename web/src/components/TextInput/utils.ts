export const MASKS: { [field: string]: any } = {
  cpf: () => ({
    mask: [/\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '.', /\d/, /\d/, /\d/, '-', /\d/, /\d/],
    inputMode: 'numeric',
  }),
};
