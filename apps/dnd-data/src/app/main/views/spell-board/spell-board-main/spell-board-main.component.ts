import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SpellBoardStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {SpellBoard} from '@models/vo/spell-board';

@Component({
  selector: 'app-spell-board-main',
  templateUrl: 'spell-board-main.component.html',
  styles: []
})
export class SpellBoardMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<SpellBoard> = SpellBoardStoreActions.actions;

  ngOnInit(): void {
  }
}
