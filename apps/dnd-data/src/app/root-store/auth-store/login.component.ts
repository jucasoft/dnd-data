import {Component, NgModule, OnInit} from '@angular/core';
import {Observable} from 'rxjs';
import {select, Store} from '@ngrx/store';
import * as AuthStoreActions from './actions';
import * as AuthStoreSelectors from './selectors';
import {CommonModule} from '@angular/common';
import {OverlayPanelModule} from 'primeng/overlaypanel';
import {SharedModule} from 'primeng/api';
import {CardModule} from 'primeng/card';
import {AvatarModule} from 'primeng/avatar';

@Component({
  selector: 'app-login',
  template: `
    <p-overlayPanel #op>
      <ng-template pTemplate>
        <p-card>
          <pre>{{ profile$ | async | json }}</pre>
          <button (click)="logout(); op.hide();">Logout</button>
        </p-card>
      </ng-template>
    </p-overlayPanel>
    <div>
      <div *ngIf="loggedIn$ | async as loggedIn; else loginContent">
        <p-avatar image="{{(profile$ | async).picture}}" shape="circle" (click)="op.toggle($event)"></p-avatar>
      </div>
      <ng-template #loginContent>
        <button (click)="login()">Login</button>
      </ng-template>
    </div>
  `,
  styles: []
})
export class LoginComponent implements OnInit {

  title = 'auth0-angular-ngrx';

  loggedIn$: Observable<boolean>;
  profile$: Observable<any>;

  constructor(private store: Store<any>) {
  }

  ngOnInit(): void {
    this.loggedIn$ = this.store.pipe(select(AuthStoreSelectors.selectIsLoggedIn));
    this.profile$ = this.store.pipe(select(AuthStoreSelectors.selectCurrentUserProfile));
    this.store.dispatch(AuthStoreActions.CheckAuth());
  }

  logout(): void {
    this.store.dispatch(AuthStoreActions.LogoutResult());
  }

  login(): void {
    this.store.dispatch(AuthStoreActions.LoginRequest());
  }
}

@NgModule({
  imports: [
    CommonModule,
    OverlayPanelModule,
    SharedModule,
    CardModule,
    AvatarModule,
  ],
  declarations: [LoginComponent],
  exports: [LoginComponent],
  providers: []
})
export class LoginModule {
}

