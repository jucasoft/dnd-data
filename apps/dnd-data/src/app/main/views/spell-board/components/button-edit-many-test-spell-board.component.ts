import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SpellBoardStoreActions, SpellBoardStoreSelectors, RootStoreState} from '@root-store/index';
import {SpellBoard} from '@models/vo/spell-board';

@Component({
  selector: 'app-button-edit-many-test-spell-board',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Edit many ({{itemsSelected.length}})" (click)="onEditMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonEditManyTestSpellBoardComponent implements OnInit {

  itemsSelected$: Observable<SpellBoard[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(SpellBoardStoreSelectors.selectItemsSelected)
    );
  }

  onEditMany(values: SpellBoard[]): void {
    const items = values.map(value => {
      const keys = Object.keys(value);
      const result = {...value};
      keys.forEach(key => {
        if (key !== 'id' && typeof result[key] === 'string') {
          result[key] = result[key] + ' edited' + new Date().getSeconds();
        }
      });
      return result;
    });
    this.store$.dispatch(SpellBoardStoreActions.EditManyRequest({items}));
  }

}
