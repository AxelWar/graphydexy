import { gql } from 'apollo-angular';

export interface QueryResultTypes {
  [x: string]: any;
  data: {
    pokemon_v2_generation: {
      pokemon_v2_types: { name: string; __typename: string }[];
      __typename: string;
    }[];
  };
}

const GET_TYPES = gql`
  query GetGen3PokemonTypes {
    pokemon_v2_generation(where: { name: {} }) {
      pokemon_v2_types {
        name
      }
    }
  }
`;

export { GET_TYPES };
