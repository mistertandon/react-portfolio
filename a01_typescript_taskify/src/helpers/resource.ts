export const getUniqueId: () => number = () => {
  return new Date().valueOf() * (Math.random() * (100 - 1) + 1);
};
