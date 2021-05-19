import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PngStoreActions, PngStoreSelectors, RootStoreState} from '@root-store/index';
import {Png} from '@models/vo/png';

@Component({
  selector: 'app-button-create-many-test-png',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Create many ({{itemsSelected.length}})" (click)="onCreateMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCreateManyTestPngComponent implements OnInit {

  itemsSelected$: Observable<Png[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(PngStoreSelectors.selectItemsSelected)
    );
  }

  onCreateMany(values: Png[]): void {
    const items = values.map(Png.newItem);
    this.store$.dispatch(PngStoreActions.CreateManyRequest({items}));
  }

}
