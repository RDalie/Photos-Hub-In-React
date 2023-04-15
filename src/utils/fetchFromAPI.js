import axios from 'axios';

export const BASE_URL = 'https://pexelsdimasv1.p.rapidapi.com/v1';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {locale: 'en-US', per_page: '15', page: '1'},
  headers: {
    Authorization: process.env.REACT_APP_PEXELS_API_KEY,
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
