import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {SpellBoardStoreActions, SpellBoardStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {SpellBoard} from '@models/vo/spell-board';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-spell-board-list',
  templateUrl: `spell-board-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellBoardListComponent implements OnInit {


  collection$: Observable<SpellBoard[]>;
  cols: any;
  itemsSelected$: Observable<SpellBoard[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('SpellBoardListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('SpellBoardListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(SpellBoardStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      SpellBoardStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      SpellBoardStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('SpellBoardListComponent.onEdit()');

    const data: PopUpData<SpellBoard> = {
      item,
      props: {title: 'Edit SpellBoard', route: 'spell-board'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['spell-board', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('SpellBoardListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<SpellBoard> = {
      item,
      props: {title: 'Copy SpellBoard', route: 'spell-board'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['spell-board', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(SpellBoardStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: SpellBoard[]): void {
    console.log('SpellBoardListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(SpellBoardStoreActions.SelectItems({items}));
  }

}
