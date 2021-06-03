import {ChangeDetectionStrategy, Component, OnDestroy, OnInit} from '@angular/core';
import {select, Store} from '@ngrx/store';
import {RootStoreState, SlideMenuStoreActions, SlideMenuStoreSelectors} from '../../../root-store/';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-hamburger-button',
  template: `
    <div *ngLet="(open$ | async) as open">
      <div class="line"></div>
      <span class="fa-stack fa-lg p-mt-1" (click)="onShowMenu($event,open)">
        <i class="circle fa fa-circle fa-stack-2x fa-inverse"></i>
        <i class="simbol fa fa-stack-2x"
           [ngClass]="open ? 'fa-chevron-circle-left' : 'fa-chevron-circle-right'">
        </i>
        <i class="border fa fa-circle-o fa-stack-2x fa-inverse"></i>
      </span>
    </div>

  `,
  styleUrls: [`./hamburger-button.component.scss`],
  changeDetection: ChangeDetectionStrategy.OnPush
})

export class HamburgerButtonComponent implements OnInit, OnDestroy {

  open$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  ngOnDestroy(): void {
  }

  ngOnInit() {
    this.open$ = this.store$.pipe(select(SlideMenuStoreSelectors.selectOpen));
  }

  onShowMenu($event, value) {
    $event.stopPropagation();
    this.store$.dispatch(SlideMenuStoreActions.Open({open: !value}));
  }
}
