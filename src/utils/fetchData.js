export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "e128afd93emsh6fd6ca10ef6148ep1fa5ebjsn418278c87e08",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};
