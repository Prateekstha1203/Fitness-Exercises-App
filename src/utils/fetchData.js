export const exerciseOptions = {
  method: "GET",
  headers: {
    "X-RapidAPI-Key": "4819e766b2msh6bf99154434999ap12be21jsn45ffead49b7b",
    "X-RapidAPI-Host": "exercisedb.p.rapidapi.com",
  },
};

export const fetchData = async (url, options) => {
  const response = await fetch(url, options);
  const data = await response.json();
  return data;
};

export const youtubeOptions = {
  method: 'GET',
 
  headers: {
    'X-RapidAPI-Key': '4819e766b2msh6bf99154434999ap12be21jsn45ffead49b7b',
    'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com'
  }
};