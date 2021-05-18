import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Png} from '@models/vo/png';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-png',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Png" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewPngComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Png = new Png();

    const data: PopUpData<Png> = {
      item,
      props: {title: 'New Png', route: 'png'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['png', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
