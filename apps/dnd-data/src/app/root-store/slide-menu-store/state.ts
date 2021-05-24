import {SlideMenuItem} from '@models/vo/slide-menu-item';
import {MenuItem} from 'primeng/api';
import {RouterStoreActions} from '@root-store/router-store/index';
import * as SlideMenuStoreActions from './actions';

export interface State {
  open: boolean;
  item: SlideMenuItem;
  items: MenuItem[];
}

export const initialState: State = {
  open: false,
  item: {breadcrumb: [], data: null},
  items: [
    {
      label: 'PNG',
      icon: 'fas fa-hand-sparkles',
      command: (event$) => {
        // invoco il router per cambiare pagina
        event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['png']}));

        // salvo nello store del menù l'elemento selezionato.
        event$.item.store$.dispatch(SlideMenuStoreActions.Select({
          item: {
            data: {},
            breadcrumb: ['Sezione ', 'PNG']
          }
        }));
      }
    },
    // {
    //   label: 'Spell',
    //   icon: 'fas fa-magic',
    //   command: (event$) => {
    //     // invoco il router per cambiare pagina
    //     event$.item.store$.dispatch(RouterStoreActions.RouterGo({path: ['spell']}));
    //
    //     // salvo nello store del menù l'elemento selezionato.
    //     event$.item.store$.dispatch(SlideMenuStoreActions.Select({
    //       item: {
    //         data: {},
    //         breadcrumb: ['Sezione ', 'Spell']
    //       }
    //     }));
    //   }
    // }
  ]
};
