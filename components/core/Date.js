export const convertDate = (date) => {
  const newDate = new Date(date);
  const el = newDate.toDateString().split(' ');

  // return `${el[0]}, ${el[2].replace(/^0+/, '')} ${el[1]}`;
  return `${el[1]} ${el[2].replace(/^0+/, '')}`;
};
