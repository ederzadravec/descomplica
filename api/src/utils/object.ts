export const removeNull = (data: any) => {
  const fieldsKey = Object.keys(data).filter((item) => data[item]);

  return fieldsKey.reduce((acc, key) => ({ ...acc, [key]: data[key] }), {});
};
