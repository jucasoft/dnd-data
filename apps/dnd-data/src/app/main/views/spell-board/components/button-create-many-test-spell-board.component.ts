import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {RootStoreState, SpellBoardStoreActions, SpellBoardStoreSelectors} from '@root-store/index';
import {SpellBoard} from '@models/vo/spell-board';

@Component({
  selector: 'app-button-create-many-test-spell-board',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-plus"
            label="Create many ({{itemsSelected.length}})" (click)="onCreateMany(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonCreateManyTestSpellBoardComponent implements OnInit {

  itemsSelected$: Observable<SpellBoard[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(SpellBoardStoreSelectors.selectItemsSelected)
    );
  }

  onCreateMany(values: SpellBoard[]): void {
    const items = values.map(value => {
      const keys = Object.keys(value);
      const result = {...value};
      keys.forEach(key => {
        result.id = null;
        if (key !== 'id' && typeof result[key] === 'string') {
          result[key] = 'edited ' + new Date().getSeconds();
        }
      });
      return result;
    });
    this.store$.dispatch(SpellBoardStoreActions.CreateManyRequest({items}));
  }

}
