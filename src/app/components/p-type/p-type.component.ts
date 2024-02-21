import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { GET_TYPES } from '../../graphql.queries/graphql.types.queries';
import { Apollo } from 'apollo-angular';

@Component({
  selector: 'app-p-type',
  standalone: true,
  imports: [CommonModule, RouterLink],
  providers: [Apollo],
  templateUrl: './p-type.component.html',
  styleUrls: ['./p-type.component.scss']
})
export class PTypeComponent implements OnInit {
  types: any[] = [];
  error: any;
  loading : boolean = true;

  constructor(private apollo : Apollo){}

  ngOnInit(): void {
    this.loadTypes();
  }

  loadTypes(){  
    this.apollo.watchQuery({
      query: GET_TYPES
    }).valueChanges.subscribe(({data, error} : any) => {
      this.loading = false;
      this.types = data;
      console.log(data)
    })
  }
}