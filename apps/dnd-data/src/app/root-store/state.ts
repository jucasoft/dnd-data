import {SpellsInventoryStoreState} from '@root-store/spells-inventory-store';
import {SpellMetaInfoStoreState} from '@root-store/spell-meta-info-store';
import {SpellBoardStoreState} from '@root-store/spell-board-store';
import {SpellStoreState} from '@root-store/spell-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';
import {AuthStoreState} from '@root-store/auth-store';

export interface State {
  spells_inventory: SpellsInventoryStoreState.State;
  spell_meta_info: SpellMetaInfoStoreState.State;
  auth: AuthStoreState.State;
  spell_board: SpellBoardStoreState.State;
  spell: SpellStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
