import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Spell} from '@models/vo/spell';

export const adapter: EntityCrudAdapter<Spell> = createCrudEntityAdapter<Spell>({
	selectId: model => Spell.selectId(model),
});

export interface State extends EntityCrudState<Spell> {
};

export const initialState: State = adapter.getInitialCrudState();
