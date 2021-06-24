import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSpell} from '@models/vo/dnd-spell';

export const adapter: EntityCrudAdapter<DndSpell> = createCrudEntityAdapter<DndSpell>({
	selectId: model => DndSpell.selectId(model),
});

export type State = EntityCrudState<DndSpell>;

export const initialState: State = adapter.getInitialCrudState();
