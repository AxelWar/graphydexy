import { gql } from 'apollo-angular'

const GET_TYPES = gql`
  query GetGen3PokemonTypes {
    pokemon_v2_typename(
      where: { pokemon_v2_language: { name: { _eq: "en" } } }
    ) {
      name
      pokemon_v2_language {
        id
      }
    }
  }
`;

export { GET_TYPES };
