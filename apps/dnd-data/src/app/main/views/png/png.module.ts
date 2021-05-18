import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {PngEditComponent} from './png-edit/png-edit.component';
import {PngMainComponent} from './png-main/png-main.component';
import {PngListComponent} from './png-list/png-list.component';
import {PngRoutingModule} from './png-routing.module';
import {ButtonNewPngComponent} from './components/button-new-png.component';
import {TableModule} from 'primeng/table';
import {DialogModule} from 'primeng/dialog';
import {ButtonModule} from 'primeng/button';
import {InputTextModule} from 'primeng/inputtext';
import {SearchModule} from '@components/search/search.module';
import {PipesModule} from '@core/pipe/pipes.module';
import {ButtonDeletePngComponent} from './components/button-delete-png.component';
import {ButtonEditManyTestPngComponent} from './components/button-edit-many-test-png.component';
import {ButtonCreateManyTestPngComponent} from './components/button-create-many-test-png.component';
import {NgLetModule} from '@core/directive/ng-let.directive';
import {ToolbarModule} from 'primeng/toolbar';
import {DropdownModule} from 'primeng/dropdown';

@NgModule({
  declarations: [
    PngEditComponent,
    PngMainComponent,
    PngListComponent,
    ButtonNewPngComponent,
    ButtonDeletePngComponent,
    ButtonEditManyTestPngComponent,
    ButtonCreateManyTestPngComponent
  ],
    imports: [
        CommonModule,
        FormsModule,
        ReactiveFormsModule,
        PngRoutingModule,
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
export class PngModule {
}
