import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {SpellMetaInfoStoreActions, SpellMetaInfoStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {SpellMetaInfo} from '@models/vo/spell-meta-info';
import {RouterStoreActions} from '@root-store/router-store/index';
import {tap} from 'rxjs/operators';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';

@Component({
  selector: 'app-spell-meta-info-list',
  templateUrl: `spell-meta-info-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellMetaInfoListComponent implements OnInit {


  collection$: Observable<SpellMetaInfo[]>;
  cols: any;
  itemsSelected$: Observable<SpellMetaInfo[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('SpellMetaInfoListComponent.constructor()');
  }

  ngOnInit(): void {
    console.log('SpellMetaInfoListComponent.ngOnInit()');

    this.itemsSelected$ = this.store$.pipe(
      select(SpellMetaInfoStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.select(
      SpellMetaInfoStoreSelectors.selectAll
    ).pipe(
      tap(values => {
        if (values && values.length > 0) {
          this.cols = Object.keys(values[0]);
        }
      })
    );

    this.store$.dispatch(
      SpellMetaInfoStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onEdit(item): void {
    console.log('SpellMetaInfoListComponent.onEdit()');

    const data: PopUpData<SpellMetaInfo> = {
      item,
      props: {title: 'Edit SpellMetaInfo', route: 'spell-meta-info'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['spell-meta-info', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('SpellMetaInfoListComponent.onCopy()');

    const item = {...{}, ...value, ...{id: null}};
    const data: PopUpData<SpellMetaInfo> = {
      item,
      props: {title: 'Copy SpellMetaInfo', route: 'spell-meta-info'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['spell-meta-info', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(SpellMetaInfoStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: SpellMetaInfo[]): void {
    console.log('SpellMetaInfoListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(SpellMetaInfoStoreActions.SelectItems({items}));
  }

}
