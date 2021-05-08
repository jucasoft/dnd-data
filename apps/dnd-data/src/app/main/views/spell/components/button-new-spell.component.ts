import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {Spell} from '@models/vo/spell';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-spell',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New Spell" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewSpellComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: Spell = new Spell();

    const data: PopUpData<Spell> = {
      item,
      props: {title: 'New Spell', route: 'spell'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['spell', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
