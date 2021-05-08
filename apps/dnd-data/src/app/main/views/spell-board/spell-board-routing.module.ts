import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpellBoardMainComponent} from './spell-board-main/spell-board-main.component';
import {SpellBoardEditComponent} from '@views/spell-board/spell-board-edit/spell-board-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: SpellBoardMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: SpellBoardEditComponent,
    outlet: 'popUp',
    pathMatch: 'full'
  },
  {
    path: '',
    redirectTo: 'main',
    pathMatch: 'full'
  },
  {
    path: '**',
    redirectTo: 'main',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class SpellBoardRoutingModule {
}
