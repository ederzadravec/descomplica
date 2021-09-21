interface Error {
  field: string;
  message: string;
}

export const formatError = (errors: Error[]) => {
  return errors.reduce((acc, error) => ({ ...acc, [error.field]: error.message }), {});
};
