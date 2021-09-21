export const duplicatedFields = (errors: string[]) => {
  const fields = errors.map((field) => ({ field, message: "Já cadastrado" }));

  return {
    error: true,
    message: "Campos duplicados",
    fields,
  };
};
