import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpellBoardEditComponent} from './spell-board-edit/spell-board-edit.component';
import {SpellBoardMainComponent} from './spell-board-main/spell-board-main.component';
import {SpellBoardListComponent} from './spell-board-list/spell-board-list.component';
import {SpellBoardRoutingModule} from './spell-board-routing.module';
import {ButtonNewSpellBoardComponent} from './components/button-new-spell-board.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteSpellBoardComponent} from './components/button-delete-spell-board.component';
import {ButtonEditManyTestSpellBoardComponent} from './components/button-edit-many-test-spell-board.component';
import {ButtonCreateManyTestSpellBoardComponent} from './components/button-create-many-test-spell-board.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    SpellBoardEditComponent,
    SpellBoardMainComponent,
    SpellBoardListComponent,
    ButtonNewSpellBoardComponent,
    ButtonDeleteSpellBoardComponent,
    ButtonEditManyTestSpellBoardComponent,
    ButtonCreateManyTestSpellBoardComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpellBoardRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule,
    DropdownModule
  ],
  providers: [],
  entryComponents: []
})
export class SpellBoardModule {
}
