import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PngStoreActions, PngStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Png} from '@models/vo/png';
import {RouterStoreActions} from '@root-store/router-store/index';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-png-list',
  templateUrl: `png-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PngListComponent implements OnInit {

  collection$: Observable<Png[]>;
  itemsSelected$: Observable<Png[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('PngListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('PngListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(PngStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      PngStoreSelectors.selectAll
    );

    this.store$.dispatch(
      PngStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('PngListComponent.onEdit()');

    const data: PopUpData<Png> = {
      item,
      props: {title: 'Edit Png', route: 'png'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['png', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('PngListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<Png> = {
      item,
      props: {title: 'Copy Png', route: 'png'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['png', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(PngStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Png[]): void {
    console.log('PngListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(PngStoreActions.SelectItems({items}));
  }

}
