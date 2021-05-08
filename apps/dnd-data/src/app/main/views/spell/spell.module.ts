import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpellEditComponent} from './spell-edit/spell-edit.component';
import {SpellMainComponent} from './spell-main/spell-main.component';
import {SpellListComponent} from './spell-list/spell-list.component';
import {SpellRoutingModule} from './spell-routing.module';
import {ButtonNewSpellComponent} from './components/button-new-spell.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteSpellComponent} from './components/button-delete-spell.component';
import {ButtonEditManyTestSpellComponent} from './components/button-edit-many-test-spell.component';
import {ButtonCreateManyTestSpellComponent} from './components/button-create-many-test-spell.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown';
import {InputNumberModule} from 'primeng/inputnumber';
import {CheckboxModule} from 'primeng/checkbox';

@NgModule({
  declarations: [
    SpellEditComponent,
    SpellMainComponent,
    SpellListComponent,
    ButtonNewSpellComponent,
    ButtonDeleteSpellComponent,
    ButtonEditManyTestSpellComponent,
    ButtonCreateManyTestSpellComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpellRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule,
    DropdownModule,
    InputNumberModule,
    CheckboxModule
  ],
  providers: [],
  entryComponents: []
})
export class SpellModule {
}
