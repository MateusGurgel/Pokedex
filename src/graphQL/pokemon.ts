import { gql } from "@apollo/client";

const GET_ALL_POKEMONS = gql`
  query GetAllPokemon($offset: Int!, $take: Int!) {
    getAllPokemon(offset: $offset, take: $take) {
      key
    }
  }
`;

export {GET_ALL_POKEMONS}
