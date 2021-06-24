import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSpellDescriptors} from '@models/vo/dnd-spell-descriptors';

export const adapter: EntityCrudAdapter<DndSpellDescriptors> = createCrudEntityAdapter<DndSpellDescriptors>({
	selectId: model => DndSpellDescriptors.selectId(model),
});

export type State = EntityCrudState<DndSpellDescriptors>;

export const initialState: State = adapter.getInitialCrudState();
