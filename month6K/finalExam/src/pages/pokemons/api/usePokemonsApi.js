import axios from "axios";

export const fetchPokemons = async () => {
  const res = await axios.get(
    "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=200"
  );
  const data = res.data.results;
  return data;
};

export const fetchPokemonDetails = async (url, title) => {
  const res = await axios.get(url);
  return {
    title,
    img: res.data.sprites.other.dream_world.front_default,
    stats: res.data.stats,
  };
};

export const fetchStats = async ([url1, url2]) => {
  if (!url1 || !url2) return [0, 0];

  const [res1, res2] = await Promise.all([axios.get(url1), axios.get(url2)]);

  const sum1 = res1.data.stats.reduce((sum, stat) => sum + stat.base_stat, 0);
  const sum2 = res2.data.stats.reduce((sum, stat) => sum + stat.base_stat, 0);

  return [sum1, sum2];
};
