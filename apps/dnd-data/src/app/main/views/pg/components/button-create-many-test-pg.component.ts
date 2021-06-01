import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PgStoreActions, PgStoreSelectors, RootStoreState} from '@root-store/index';
import {Pg} from '@models/vo/pg';

@Component({
  selector: 'app-button-create-many-test-pg',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Create many ({{itemsSelected.length}})" (click)="onCreateMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCreateManyTestPgComponent implements OnInit {

  itemsSelected$: Observable<Pg[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(PgStoreSelectors.selectItemsSelected)
    );
  }

  onCreateMany(values: Pg[]): void {
    const items = values.map(Pg.newItem);
    this.store$.dispatch(PgStoreActions.CreateManyRequest({items}));
  }

}
