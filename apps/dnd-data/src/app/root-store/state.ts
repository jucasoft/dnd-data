import {InfoStoreState} from '@root-store/info-store';
import {PgStoreState} from '@root-store/pg-store';
import {SpellsInventoryStoreState} from '@root-store/spells-inventory-store';
import {SpellStoreState} from '@root-store/spell-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';
import {AuthStoreState} from '@root-store/auth-store';

export interface State {
  info: InfoStoreState.State;
  pg: PgStoreState.State;
  spells_inventory: SpellsInventoryStoreState.State;
  auth: AuthStoreState.State;
  spell: SpellStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
