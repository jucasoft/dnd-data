import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SpellStoreActions, SpellStoreSelectors, RootStoreState} from '@root-store/index';
import {Spell} from '@models/vo/spell';

@Component({
  selector: 'app-button-delete-spell',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteSpellComponent implements OnInit {

  itemsSelected$: Observable<Spell[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(SpellStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Spell[]): void {
    this.store$.dispatch(SpellStoreActions.DeleteManyRequest({items}));
  }

}
