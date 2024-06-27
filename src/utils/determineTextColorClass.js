export const determineTextColorClass = (dynamicColor) => {
  if (dynamicColor) {
    return dynamicColor === '#000000' ? 'text-primary' : 'text-dynamic';
  } else {
    return 'text-tertiary';
  }
};