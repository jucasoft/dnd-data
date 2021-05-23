import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {PngStoreSelectors, RootStoreState, RouterStoreSelectors, SpellsInventoryStoreActions, SpellsInventoryStoreSelectors} from '@root-store/index';
import {Spell} from '@models/vo/spell';
import {Observable} from 'rxjs';
import {Png} from '@models/vo/png';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {scan, tap} from 'rxjs/operators';
import {selectAllDenorm$} from '@root-store/spell-store/selectors';

@Component({
  selector: 'app-spell-main',
  templateUrl: 'spell-main.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellMainComponent implements OnInit {

  collection$: Observable<Spell[]>;
  pngSelected$: Observable<Png>;
  spellsInventory$: Observable<SpellsInventory[]>

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {

    this.store$.pipe(
      select(RouterStoreSelectors.selectRouteParams),
      tap(value => console.log('value', value)),
    ).subscribe();

    this.pngSelected$ = this.store$.pipe(
      select(PngStoreSelectors.selectItemSelectedOrigin)
    );

    this.collection$ = this.store$.pipe(
      // SpellStoreSelectors.selectAllDenorm
      selectAllDenorm$()
    );

    this.spellsInventory$ = this.store$.select(
      SpellsInventoryStoreSelectors.selectAll,
      scan((acc, value: SpellsInventory) => {
        acc[value.spellsDictionaryId] = value;
        return acc;
      }, {})
    );

    this.store$.dispatch(
      SpellsInventoryStoreActions.SearchRequest({queryParams: {}})
    );

  }

}
