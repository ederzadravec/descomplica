export const onlyNumbers = (data: string) => {
  if (!data) return;

  return data?.toString()?.replace(/[^\d]/g, '');
};
