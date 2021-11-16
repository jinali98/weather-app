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

export const removeCountryCard = (list, country) => {
  console.log(list);
  console.log(country);
  const exisitingCountry = list.find((item) => item.id === country.id);

  if (!exisitingCountry) return;

  return list.filter((listItem) => listItem.id !== country.id);
};
