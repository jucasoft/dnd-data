import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {SpellMetaInfoStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {SpellMetaInfo} from '@models/vo/spell-meta-info';

@Component({
  selector: 'app-spell-meta-info-main',
  templateUrl: 'spell-meta-info-main.component.html',
  styles: []
})
export class SpellMetaInfoMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<SpellMetaInfo> = SpellMetaInfoStoreActions.actions;

  ngOnInit(): void {
  }
}
