import {ChangeDetectionStrategy, Component, HostListener, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {PngStoreActions, RootStoreState, SlideMenuStoreActions, SlideMenuStoreSelectors, SpellStoreActions} from '@root-store/index';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class AppComponent implements OnInit {

  open$: Observable<boolean>;

  constructor(private readonly store$: Store<RootStoreState.State>) {
  }

  @HostListener('document:keydown.escape', ['$event'])
  onMouseup(event: KeyboardEvent): void {
    // Metodo invocato alla pressione di ESC, utilizzato per la chiusura di tutte le popUp o i toast.
  }

  onClickOutside($event, open, elements): void {
    if (open && elements.offsetLeft === 0) {
      this.store$.dispatch(SlideMenuStoreActions.Open({open: !open}));
    }
  }

  ngOnInit(): void {
    this.store$.dispatch(
      SpellStoreActions.SearchRequest({queryParams: {}})
    );

    this.store$.dispatch(
      PngStoreActions.SearchRequest({queryParams: {}})
    );

    this.open$ = this.store$.select(SlideMenuStoreSelectors.selectOpen);
  }

}
