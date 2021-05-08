import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SpellBoardStoreActions, SpellBoardStoreSelectors, RootStoreState} from '@root-store/index';
import {SpellBoard} from '@models/vo/spell-board';

@Component({
  selector: 'app-button-delete-spell-board',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteSpellBoardComponent implements OnInit {

  itemsSelected$: Observable<SpellBoard[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(SpellBoardStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: SpellBoard[]): void {
    this.store$.dispatch(SpellBoardStoreActions.DeleteManyRequest({items}));
  }

}
