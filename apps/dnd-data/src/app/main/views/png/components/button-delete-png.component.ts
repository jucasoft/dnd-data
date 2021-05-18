import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {Observable} from 'rxjs';
import {PngStoreActions, PngStoreSelectors, RootStoreState} from '@root-store/index';
import {Png} from '@models/vo/png';

@Component({
  selector: 'app-button-delete-png',
  template: `
    <button type="button" *ngLet="(itemsSelected$|async) as itemsSelected" pButton icon="pi pi-trash"
            label="Delete ({{itemsSelected.length}})" (click)="onDelete(itemsSelected)"
            [disabled]="!(itemsSelected.length > 0)"
            class="p-button-danger"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonDeletePngComponent implements OnInit {

  itemsSelected$: Observable<Png[]>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(PngStoreSelectors.selectItemsSelected)
    );
  }

  onDelete(items: Png[]): void {
    this.store$.dispatch(PngStoreActions.DeleteManyRequest({items}));
  }

}
