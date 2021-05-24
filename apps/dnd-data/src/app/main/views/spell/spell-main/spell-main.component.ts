import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';
import {Spell} from '@models/vo/spell';
import {Observable} from 'rxjs';
import {Png} from '@models/vo/png';
import {SpellsInventory} from '@models/vo/spells-inventory';

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

  }

}
