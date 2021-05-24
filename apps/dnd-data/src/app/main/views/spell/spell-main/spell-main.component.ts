import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-spell-main',
  templateUrl: 'spell-main.component.html',
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SpellMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
  }

}
