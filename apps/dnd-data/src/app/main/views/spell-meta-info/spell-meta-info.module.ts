import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SpellMetaInfoEditComponent} from './spell-meta-info-edit/spell-meta-info-edit.component';
import {SpellMetaInfoMainComponent} from './spell-meta-info-main/spell-meta-info-main.component';
import {SpellMetaInfoListComponent} from './spell-meta-info-list/spell-meta-info-list.component';
import {SpellMetaInfoRoutingModule} from './spell-meta-info-routing.module';
import {ButtonNewSpellMetaInfoComponent} from './components/button-new-spell-meta-info.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeleteSpellMetaInfoComponent} from './components/button-delete-spell-meta-info.component';
import {ButtonEditManyTestSpellMetaInfoComponent} from './components/button-edit-many-test-spell-meta-info.component';
import {ButtonCreateManyTestSpellMetaInfoComponent} from './components/button-create-many-test-spell-meta-info.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';

@NgModule({
  declarations: [
    SpellMetaInfoEditComponent,
    SpellMetaInfoMainComponent,
    SpellMetaInfoListComponent,
    ButtonNewSpellMetaInfoComponent,
    ButtonDeleteSpellMetaInfoComponent,
    ButtonEditManyTestSpellMetaInfoComponent,
    ButtonCreateManyTestSpellMetaInfoComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    SpellMetaInfoRoutingModule,
    TableModule,
    DialogModule,
    ButtonModule,
    InputTextModule,
    PipesModule,
    SearchModule,
    NgLetModule,
    ToolbarModule
  ],
  providers: [],
  entryComponents: []
})
export class SpellMetaInfoModule {
}
