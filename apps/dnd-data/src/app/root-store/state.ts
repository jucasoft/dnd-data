import {CommentStoreState} from '@root-store/comment-store';
import {PngStoreState} from '@root-store/png-store';
import {SpellsInventoryStoreState} from '@root-store/spells-inventory-store';
import {SpellStoreState} from '@root-store/spell-store';
import {SlideMenuStoreState} from '@root-store/slide-menu-store';
import {AuthStoreState} from '@root-store/auth-store';

export interface State {
comment:CommentStoreState.State;
png:PngStoreState.State;
  spells_inventory: SpellsInventoryStoreState.State;
  auth: AuthStoreState.State;
  spell: SpellStoreState.State;
  slide_menu: SlideMenuStoreState.State;
}
