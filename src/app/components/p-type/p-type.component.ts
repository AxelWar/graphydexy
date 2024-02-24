//p-type.component.ts

import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { PokeService } from '../../shared/services/poke-service.service';

@Component({
  selector: 'app-p-type',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [PokeService],
  templateUrl: './p-type.component.html',
  styleUrls: ['./p-type.component.scss'],
})
export class PTypeComponent implements OnInit {
  types: string[] = [];
  error: any;
  loading: boolean = true;

  constructor(private pokeService: PokeService) {}

  ngOnInit(): void {
    this.loadTypes();
  }

  loadTypes() {
    this.pokeService.getPokemonTypes().subscribe((data: string[]) => {
      this.loading = false;
      this.types = data;
    });
  }
}
