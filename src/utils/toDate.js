export const toDate = (unix) => {
  const milli = new Date(unix * 1000);
  const date = milli.toDateString();
  return date;
};
