// import { NgModule } from '@angular/core';
// import { Routes, RouterModule } from '@angular/router';

// const routes: Routes = [
//   {
//     path: '',
//     pathMatch: 'full',
//     redirectTo: 'products'
//   },
//   {
//     path: 'products',
//     loadChildren: './+products/products.module#ProductsModule'
//   }
// ];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
// // export const routes: Routes = [
// //   {
// //     path: '',
// //     pathMatch: 'full',
// //     redirectTo: 'products'
// //   },
// //   {
// //     path: 'products',
// //     loadChildren: './+products/products.module#ProductsModule'
// //   }
// // ];https://github.com/benetis/didactic-computing-machine

import {Routes, RouterModule} from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'products'
  },
  {
    path: 'products',
    loadChildren: './+products/products.module#ProductsModule'
  }
];