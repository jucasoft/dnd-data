import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Pg} from '@models/vo/pg';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-pg',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Pg" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewPgComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Pg = new Pg();

    const data: PopUpData<Pg> = {
      item,
      props: {title: 'New Pg', route: 'pg'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['pg', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
