import { Injectable } from '@angular/core';
import { ApolloQueryResult } from '@apollo/client';
import { Apollo } from 'apollo-angular';
import { Observable, map } from 'rxjs';
import { GET_TYPES } from '../graphql/graphql.queries/graphql.types.queries';
import {
  PokemonType,
  PokemonTypesQueryResult,
} from '../interfaces/p-type.interface';

@Injectable({
  providedIn: 'root',
})
export class PokeService {
  constructor(private apollo: Apollo) {}

  getPokemonTypes(): Observable<string[]> {
    return this.apollo
      .query<PokemonTypesQueryResult>({
        query: GET_TYPES,
      })
      .pipe(
        map((response: ApolloQueryResult<PokemonTypesQueryResult>) => response.data.pokemon_v2_typename.map(
          (type: PokemonType) => type.name
        )
        )
      );
  }
}
