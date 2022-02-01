export const getUniqueId: () => string = () => {
  return new Date().valueOf().toString();
};
