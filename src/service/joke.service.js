import API from "../service/api";

export const getRandomJoke = async () => {
  const res = await API.get("/jokes/random");
  return res.data;
};
