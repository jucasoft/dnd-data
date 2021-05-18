import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PngStoreActions, RootStoreState} from '@root-store/index';
import {Actions} from 'ngrx-entity-crud';
import {Png} from '@models/vo/png';

@Component({
  selector: 'app-png-main',
  templateUrl: 'png-main.component.html',
  styles: []
})
export class PngMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  actions: Actions<Png> = PngStoreActions.actions;

  ngOnInit(): void {
  }
}
