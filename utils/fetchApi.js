import axios from "axios";

export const baseUrl = "https://bayut.p.rapidapi.com";

export const fetchApi = async (url) => {
  const { data } = await axios.get(url, {
    headers: {
      "x-rapidapi-host": "bayut.p.rapidapi.com",
      "x-rapidapi-key": "afd3e07199mshf75ee16f17a02ccp1d8cdajsn09979376e2a1",
    },
  });
  return data;
};
