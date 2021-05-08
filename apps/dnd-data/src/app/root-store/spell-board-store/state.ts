import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {SpellBoard} from '@models/vo/spell-board';

export const adapter: EntityCrudAdapter<SpellBoard> = createCrudEntityAdapter<SpellBoard>({
	selectId: model => SpellBoard.selectId(model),
});

export interface State extends EntityCrudState<SpellBoard> {
};

export const initialState: State = adapter.getInitialCrudState();
