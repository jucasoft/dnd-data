import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)},
  {path: 'spell', loadChildren: () => import('./main/views/spell/spell.module').then(m => m.SpellModule)},
  {path: 'png', loadChildren: () => import('./main/views/png/png.module').then(m => m.PngModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
