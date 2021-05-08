import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {SpellMetaInfo} from '@models/vo/spell-meta-info';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-spell-meta-info',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New SpellMetaInfo" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewSpellMetaInfoComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: SpellMetaInfo = new SpellMetaInfo();

    const data: PopUpData<SpellMetaInfo> = {
      item,
      props: {title: 'New SpellMetaInfo', route: 'spell-meta-info'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['spell-meta-info', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
