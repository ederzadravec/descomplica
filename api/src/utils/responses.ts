export const duplicatedFields = (errors: string[]) => {
  const fields = errors.map((field) => ({ field, message: 'already registered' }));

  return {
    error: true,
    message: 'duplicated Fields',
    fields,
  };
};
