export const addNewCountryToTheList = (newCountry, countryList) => {
  const exisitingList = countryList.find(
    (country) => country.id === newCountry.id
  );

  if (!exisitingList) {
    return [...countryList, newCountry];
  }

  return countryList;
};

export const formatCountryListWeather = (fetchedData, countryList) => {
  return countryList.map((country, index) => {
    return { ...fetchedData[index], id: country.id, name: country.name };
  });
};
