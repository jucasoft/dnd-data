import {Component, OnInit, ViewEncapsulation} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import {AuthStoreSelectors} from '@root-store/auth-store';

@Component({
  selector: 'app-header',
  template: `
    <div class="p-grid p-justify-between">
      <div class="p-col">
        <div>
          <app-hamburger-button *ngIf="loggedIn$ | async as loggedIn;"></app-hamburger-button>
        </div>
      </div>
      <div class="p-col text-align-right">
        <app-login></app-login>
      </div>
    </div>
  `,
  styles: [`
    .fa-button:hover {
      opacity: 0.5;
      transition: transform 0.2s;
      /*transform: scale(1.1);*/
      cursor: pointer;
      cursor: hand;
    }
  `],
  encapsulation: ViewEncapsulation.None
})
export class HeaderComponent implements OnInit {

  loggedIn$: Observable<boolean>;

  constructor(private store$: Store) {
  }

  ngOnInit(): void {
    this.loggedIn$ = this.store$.pipe(select(AuthStoreSelectors.selectIsLoggedIn));
  }

}
