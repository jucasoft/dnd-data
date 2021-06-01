import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PgMainComponent} from './pg-main/pg-main.component';
import {PgEditComponent} from '@views/pg/pg-edit/pg-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: PgMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: PgEditComponent,
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
export class PgRoutingModule {
}
