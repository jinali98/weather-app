export const fetchData = (url) => {
  return fetch(url).then((res) => {
    if (!res.ok) throw new Error("Something went Wrong");

    return res.json();
  });
};
