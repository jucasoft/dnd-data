import {ChangeDetectionStrategy, Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {Observable, of} from 'rxjs';
import {RouterStoreActions} from '@root-store/router-store/index';
import {PopUpData} from '@root-store/router-store/pop-up-base.component';
import {SpellBoard} from '@models/vo/spell-board';
import {RootStoreState} from '@root-store/index';

@Component({
  selector: 'app-button-new-spell-board',
  template: `
    <button type="button" pButton icon="pi pi-plus"
            label="New SpellBoard" (click)="onCreate()"
            [disabled]="(disabled$ |async)"
            class="p-button-success"></button>
  `,
  styles: [],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ButtonNewSpellBoardComponent implements OnInit {

  disabled$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnInit() {
    this.disabled$ = of(false);
  }

  onCreate() {
    const item: SpellBoard = new SpellBoard();

    const data: PopUpData<SpellBoard> = {
      item,
      props: {title: 'New SpellBoard', route: 'spell-board'}
    };

    this.store$.dispatch(RouterStoreActions.RouterGoPopUp({
      path: ['spell-board', {outlets: {popUp: ['edit']}}],
      data
    }));
  }

}
