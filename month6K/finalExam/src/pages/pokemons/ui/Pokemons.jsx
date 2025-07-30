import React, { useEffect } from "react";
import CardComp from "../../../shared/ui/Card";
import { fetchPokemonDetails, fetchPokemons } from "../api/usePokemonsApi";
import { useQuery } from "@tanstack/react-query";
import { usePokemonsStore } from "../model/usePokemons";

const Pokemons = () => {
  const { setPokemons, pokemons } = usePokemonsStore();

  const { data: list, isLoading } = useQuery({
    queryKey: ["pokemonList"],
    queryFn: fetchPokemons,
  });

  const { data: detailsList } = useQuery({
    queryKey: ["pokemonDetailsList", list],
    queryFn: async () => {
      if (!list) return [];
      const results = await Promise.all(
        list.map((pokemon) => fetchPokemonDetails(pokemon.url, pokemon.name))
      );
      return results;
    },
    enabled: !!list,
  });

  useEffect(() => {
    if (detailsList) {
      setPokemons(detailsList);
    }
  }, [detailsList, setPokemons]);

  if (isLoading) return <div>Loading pokemons...</div>;

  return (
    <div>
      <h2>Pokemons</h2>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          gap: "16px",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        {pokemons.map((pokemon) => (
          <CardComp
            key={pokemon.title}
            title={pokemon.title}
            img={pokemon.img}
            stats={pokemon.stats}
          />
        ))}
      </div>
    </div>
  );
};

export default Pokemons;
