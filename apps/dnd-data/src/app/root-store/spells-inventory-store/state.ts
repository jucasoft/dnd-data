import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {SpellsInventory} from '@models/vo/spells-inventory';

export const adapter: EntityCrudAdapter<SpellsInventory> = createCrudEntityAdapter<SpellsInventory>({
  selectId: model => SpellsInventory.selectId(model),
});

export interface State extends EntityCrudState<SpellsInventory> {
  loadingSearch: boolean;
};

export const initialState: State = adapter.getInitialCrudState(
  {loadingSearch: false}
);
