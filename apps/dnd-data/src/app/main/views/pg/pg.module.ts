import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PgEditComponent} from './pg-edit/pg-edit.component';
import {PgMainComponent} from './pg-main/pg-main.component';
import {PgListComponent} from './pg-list/pg-list.component';
import {PgRoutingModule} from './pg-routing.module';
import {ButtonNewPgComponent} from './components/button-new-pg.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeletePgComponent} from './components/button-delete-pg.component';
import {ButtonEditManyTestPgComponent} from './components/button-edit-many-test-pg.component';
import {ButtonCreateManyTestPgComponent} from './components/button-create-many-test-pg.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown';
import {MultiSelectModule} from 'primeng/multiselect';

@NgModule({
  declarations: [
    PgEditComponent,
    PgMainComponent,
    PgListComponent,
    ButtonNewPgComponent,
    ButtonDeletePgComponent,
    ButtonEditManyTestPgComponent,
    ButtonCreateManyTestPgComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    PgRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule,
    DropdownModule,
    MultiSelectModule
  ],
  providers: [],
  entryComponents: []
})
export class PgModule {
}
