export const toKebabCase = (str = '') => (
  str.replace(/[^a-z]/gi, '-')
    .replace(/\B([A-Z])/g, '-$1')
    .toLowerCase()
);
