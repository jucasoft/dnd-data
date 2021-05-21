import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-home-main',
  templateUrl: 'home-main.component.html',
  styleUrls: ['home-main.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class HomeMainComponent implements OnInit {

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit(): void {
  }

}

