import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {SpellMetaInfoStoreActions, SpellMetaInfoStoreSelectors, RootStoreState} from '@root-store/index';
import {SpellMetaInfo} from '@models/vo/spell-meta-info';

@Component({
  selector: 'app-button-delete-spell-meta-info',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeleteSpellMetaInfoComponent implements OnInit {

  itemsSelected$: Observable<SpellMetaInfo[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(SpellMetaInfoStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: SpellMetaInfo[]): void {
    this.store$.dispatch(SpellMetaInfoStoreActions.DeleteManyRequest({items}));
  }

}
