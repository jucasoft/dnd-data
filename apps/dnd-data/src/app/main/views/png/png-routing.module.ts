import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {PngMainComponent} from './png-main/png-main.component';
import {PngEditComponent} from '@views/png/png-edit/png-edit.component';

const routes: Routes = [
  {
    path: 'main',
    component: PngMainComponent,
    pathMatch: 'full'
  },
  {
    path: 'edit',
    component: PngEditComponent,
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
export class PngRoutingModule {
}
