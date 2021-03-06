import {createFeatureSelector, createSelector, MemoizedSelector} from '@ngrx/store';

import {State} from './state';
import {Names} from './names';
import {SlideMenuItem} from '@models/vo/slide-menu-item';
import {MenuItem} from 'primeng/api';
import {PgStoreSelectors} from '@root-store/pg-store/index';
import {Pg} from '@models/vo/pg';
import {RouterStoreActions} from '@root-store/router-store/index';
import * as SlideMenuStoreActions from './actions';

const getOpen = (state: State): boolean => state.open;
const getItem = (state: State): SlideMenuItem => state.item;
const getItems = (state: State): MenuItem[] => state.items;
const getBreadcrumb = (value: SlideMenuItem): string[] => value.breadcrumb;

export const selectState: MemoizedSelector<object, State> = createFeatureSelector<State>(Names.NAME);

export const selectItemsA: MemoizedSelector<object, MenuItem[]> = createSelector(
  selectState,
  getItems
);

export const selectItem: MemoizedSelector<object, SlideMenuItem> = createSelector(
  selectState,
  getItem
);


export const selectOpen: MemoizedSelector<object, boolean> = createSelector(
  selectState,
  getOpen
);

export const selectBreadcrumb: MemoizedSelector<object, string[]> = createSelector(
  selectItem,
  getBreadcrumb
);

export const selectBreadcrumbRenderized: MemoizedSelector<object, string> = createSelector(
  selectBreadcrumb,
  (values: string[]): string => {
    return values.join(' > ');
  }
);

export const selectItems: MemoizedSelector<any, MenuItem[]> = createSelector(
  selectItemsA,
  PgStoreSelectors.selectAll,
  (menuItems: MenuItem[], allPg: Pg[]): MenuItem[] => {
    const result = allPg.map((pg: Pg) => {
      return {
        label: pg.name,
        icon: 'fas fa-hat-wizard',
        command: (event$) => {
          // invoco il router per cambiare pagina
          const base64Pg = btoa(JSON.stringify(pg))
          event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['spell', 'main', base64Pg]}));

          // salvo nello store del menù l'elemento selezionato.
          event$.item.store$.dispatch(SlideMenuStoreActions.Select({
            item: {
              data: {},
              breadcrumb: ['Spell', pg.name]
            }
          }));
        }
      } as MenuItem;
    });
    return [...menuItems, ...result];
  }
);
