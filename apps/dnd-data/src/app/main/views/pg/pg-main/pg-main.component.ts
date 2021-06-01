import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PgStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Pg} from '@models/vo/pg';

@Component({
  selector: 'app-pg-main',
  templateUrl: 'pg-main.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class PgMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Pg> = PgStoreActions.actions;

  ngOnInit(): void {
  }
}
