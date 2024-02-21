import { Routes } from '@angular/router';


export const routes: Routes = [
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    }, 
    {
        path: 'types',
        loadComponent: () => import('./components/p-type/p-type.component').then(c => c.PTypeComponent)
    },
];
