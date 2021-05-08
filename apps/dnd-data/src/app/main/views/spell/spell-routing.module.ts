import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpellMainComponent} from './spell-main/spell-main.component';
import {SpellEditComponent} from '@views/spell/spell-edit/spell-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: SpellMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: SpellEditComponent,
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
export class SpellRoutingModule {
}
