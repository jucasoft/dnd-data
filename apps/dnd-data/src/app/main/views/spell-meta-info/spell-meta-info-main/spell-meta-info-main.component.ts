import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState, SpellMetaInfoStoreActions} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {SpellMetaInfo} from '@models/vo/spell-meta-info';

@Component({
  selector: 'app-spell-meta-info-main',
  templateUrl: 'spell-meta-info-main.component.html',
  styles: []
})
export class SpellMetaInfoMainComponent implements OnInit {

  actions: Actions<SpellMetaInfo> = SpellMetaInfoStoreActions.actions;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
  }
}
