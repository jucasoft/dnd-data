import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PgStoreActions, PgStoreSelectors, RootStoreState} from '@root-store/index';
import {Observable} from 'rxjs';
import {Pg} from '@models/vo/pg';
import {RouterStoreActions} from '@root-store/router-store/index';
import {ConfirmationService} from 'primeng/api';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {ClassLevel} from '@models/vo/class-level';
import {DomainLevel} from '@models/vo/domain-level';

@Component({
  selector: 'app-pg-list',
  templateUrl: `pg-list.component.html`,
  styles: [``],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PgListComponent implements OnInit {

  public classLevelToString = ClassLevel.toStringList;
  public domainLevelToString = DomainLevel.toStringList;
  public join = (values: string[]) => values.join(', ');

  collection$: Observable<Pg[]>;
  itemsSelected$: Observable<Pg[]>;

  constructor(private store$: Store<RootStoreState.State>,
              private confirmationService: ConfirmationService) {
    console.log('PgListComponent.constructor()');
  }

  ngOnInit(): void {

    this.itemsSelected$ = this.store$.pipe(
      select(PgStoreSelectors.selectItemsSelected)
    );

    this.collection$ = this.store$.pipe(
      select(PgStoreSelectors.selectAll)
    );

  }

  onEdit(item): void {
    console.log('PgListComponent.onEdit()');

    const data: PopUpData<Pg> = {
      item,
      props: {title: 'Edit Pg', route: 'pg'}
    };

    // apro la popUP
    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['pg', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onCopy(value): void {
    console.log('PgListComponent.onCopy()');

    const item = Pg.newItem(value);
    const data: PopUpData<Pg> = {
      item,
      props: {title: 'Copy Pg', route: 'pg'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['pg', {outlets: {popUp: ['edit']}}],
      data
    }));

  }

  onDelete(item): void {

    this.confirmationService.confirm({
      message: 'Are you sure that you want to perform this action?',
      accept: () => {
        this.store$.dispatch(PgStoreActions.DeleteRequest({item}));
      }
    });

  }

  onSelectionChange(items: Pg[]): void {
    console.log('PgListComponent.onSelectionChange()');
    console.log('items', items);
    this.store$.dispatch(PgStoreActions.SelectItems({items}));
  }

}
