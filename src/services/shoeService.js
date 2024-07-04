import axios from 'axios';

const API_URL = 'http://localhost:5000/shoes';

const getShoes = async () => {
  const response = await axios.get(API_URL);
  return response.data;
};

export { getShoes };