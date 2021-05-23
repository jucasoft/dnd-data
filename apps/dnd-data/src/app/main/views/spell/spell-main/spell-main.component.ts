import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PngStoreSelectors, RootStoreState, SpellsInventoryStoreActions, SpellsInventoryStoreSelectors, SpellStoreSelectors} from '@root-store/index';
import {Spell} from '@models/vo/spell';
import {Observable} from 'rxjs';
import {Png} from '@models/vo/png';
import {SpellsInventory} from '@models/vo/spells-inventory';
import {scan} from 'rxjs/operators';
import {selectAllDenorm$} from '@root-store/spell-store/selectors';

@Component({
  selector: 'app-spell-main',
  templateUrl: 'spell-main.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellMainComponent implements OnInit {

  collection$: Observable<Spell[]>;
  pngCollection$: Observable<Png[]>
  spellsInventory$: Observable<SpellsInventory[]>

  constructor(private readonly store$: Store<RootStoreState.State>) {

  }

  ngOnInit(): void {

    this.collection$ = this.store$.pipe(
      // SpellStoreSelectors.selectAllDenorm
      selectAllDenorm$()
    );

    this.pngCollection$ = this.store$.select(
      PngStoreSelectors.selectAll
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

  onSearch(valueA: string): void {
    const value = `classLevels.class=${valueA}`;
    this.store$.dispatch(
      SpellsInventoryStoreActions.SearchRequest({queryParams: {}})
    );
    // this.store$.dispatch(this.actions.SearchRequest({queryParams: parseQueryString(value)}));
  }

}
