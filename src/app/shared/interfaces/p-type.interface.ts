export interface PokemonType {
  name: string;
  pokemon_v2_language: {
    id: number;
    __typename: string;
  };
  __typename: string;
}

export interface PokemonTypesQueryResult {
    pokemon_v2_typename: PokemonType[];
}
