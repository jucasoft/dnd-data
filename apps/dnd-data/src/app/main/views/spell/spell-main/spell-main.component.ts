import {Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootStoreState, SpellStoreActions, SpellStoreSelectors} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Spell} from '@models/vo/spell';
import {Observable} from 'rxjs';
import {parseQueryString} from '@core/utils/j-utils';
import {Dictionary} from '@ngrx/entity';
import {spelsss} from '../../../../../../../../db';

@Component({
  selector: 'app-spell-main',
  templateUrl: 'spell-main.component.html',
  styles: []
})
export class SpellMainComponent implements OnInit {

  collection$: Observable<Spell[]>;
  itemsSelected$: Observable<Spell[]>;
  entitiesSelected$: Observable<Dictionary<Spell>>;

  constructor(private readonly store$: Store<RootStoreState.State>) {

  }

  actions: Actions<Spell> = SpellStoreActions.actions;

  ngOnInit(): void {
    this.itemsSelected$ = this.store$.pipe(
      select(SpellStoreSelectors.selectItemsSelected)
    );

    this.entitiesSelected$ = this.store$.pipe(
      select(SpellStoreSelectors.selectEntitiesSelected)
    );

    this.collection$ = this.store$.select(
      SpellStoreSelectors.selectAll
    );

    this.store$.dispatch(
      SpellStoreActions.SearchRequest({queryParams: {}})
    );

  }

  onSearch(valueA: string): void {
    const value = `classLevels.class=${valueA}`;
    this.store$.dispatch(this.actions.SearchRequest({queryParams: parseQueryString(value)}));
  }

}
