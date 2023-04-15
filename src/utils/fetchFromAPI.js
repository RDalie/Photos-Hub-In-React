import axios from 'axios';

export const BASE_URL = 'https://pexelsdimasv1.p.rapidapi.com/v1';

const options = {
  method: 'GET',
  url: BASE_URL,
  params: {locale: 'en-US', per_page: '15', page: '1'},
  headers: {
    Authorization: 'UUDwVmjFV5dww3RTGm8Qs8uQEQuEnCyA1VgngxA1TKh6irvbHNsAuOOX',
    'X-RapidAPI-Key': '603a07c69cmshd4daa956a1c43b5p1adcbcjsn2f7171c64889',
    'X-RapidAPI-Host': 'PexelsdimasV1.p.rapidapi.com'
  }
};


export const fetchFromAPI = async (url) => {
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);

  return data;
};
