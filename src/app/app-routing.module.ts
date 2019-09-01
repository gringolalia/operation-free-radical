import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadChildren: './home/home.module#HomePageModule'
  },
  {
    path: 'list',
    loadChildren: './list/list.module#ListPageModule'
  },
  { path: 'last', loadChildren: './last/last.module#LastPageModule' },
  { path: 'least', loadChildren: './least/least.module#LeastPageModule' },
  { path: 'lost', loadChildren: './lost/lost.module#LostPageModule' },
  { path: 'lust', loadChildren: './lust/lust.module#LustPageModule' },
  { path: 'mast', loadChildren: './mast/mast.module#MastPageModule' },
  { path: 'mist', loadChildren: './mist/mist.module#MistPageModule' },
  { path: 'most', loadChildren: './most/most.module#MostPageModule' },
  { path: 'must', loadChildren: './must/must.module#MustPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
