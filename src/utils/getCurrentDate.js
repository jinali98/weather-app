export const getCurrentDate = () => {
  const date = new Date();
  const locale = navigator.language;
  const options = {
    day: "numeric",
    month: "long",
    year: "numeric",
  };
  const formatedDate = new Intl.DateTimeFormat(locale, options).format(date);
  return formatedDate;
};
