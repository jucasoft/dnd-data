import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', loadChildren: () => import('./main/views/home/home.module').then(m => m.HomeModule)},
  {path: 'spell', loadChildren: () => import('./main/views/spell/spell.module').then(m => m.SpellModule)},
  {path: 'spell-board', loadChildren: () => import('./main/views/spell-board/spell-board.module').then(m => m.SpellBoardModule)},
  {path: 'spell-meta-info', loadChildren: () => import('./main/views/spell-meta-info/spell-meta-info.module').then(m => m.SpellMetaInfoModule)},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {enableTracing: false, relativeLinkResolution: 'legacy'})],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
