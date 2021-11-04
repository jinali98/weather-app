export const addNewCountryToTheList = (newCountry, countryList) => {
  const exisitingList = countryList.find(
    (country) => country.id === newCountry.id
  );

  if (!exisitingList) {
    return [...countryList, newCountry];
  }

  return countryList;
};
