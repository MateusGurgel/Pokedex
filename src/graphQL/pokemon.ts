import { gql } from "@apollo/client";

const GET_ALL_POKEMONS = gql`
  query GetAllPokemon($offset: Int!, $take: Int!) {
    getAllPokemon(offset: $offset, take: $take) {
      key
    }
  }
`;

const GET_POKEMON = gql`
  query getPokemon($pokemon: PokemonEnum!) {
    getPokemon(pokemon: $pokemon) {
      baseStats {
        attack
        defense
        hp
        specialattack
        specialdefense
        speed
      }
      sprite
    }
  }
`;

export {GET_ALL_POKEMONS, GET_POKEMON}
