import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {SpellMetaInfoMainComponent} from './spell-meta-info-main/spell-meta-info-main.component';
import {SpellMetaInfoEditComponent} from '@views/spell-meta-info/spell-meta-info-edit/spell-meta-info-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: SpellMetaInfoMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: SpellMetaInfoEditComponent,
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
export class SpellMetaInfoRoutingModule {
}
