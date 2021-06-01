import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PgStoreActions, PgStoreSelectors, RootStoreState} from '@root-store/index';
import {Pg} from '@models/vo/pg';

@Component({
  selector: 'app-button-delete-pg',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeletePgComponent implements OnInit {

  itemsSelected$: Observable<Pg[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(PgStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Pg[]): void {
    this.store$.dispatch(PgStoreActions.DeleteManyRequest({items}));
  }

}
