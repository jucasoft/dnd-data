import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSpellDescriptor} from '@models/vo/dnd-spell-descriptor';

export const adapter: EntityCrudAdapter<DndSpellDescriptor> = createCrudEntityAdapter<DndSpellDescriptor>({
	selectId: model => DndSpellDescriptor.selectId(model),
});

export interface State extends EntityCrudState<DndSpellDescriptor> {
};

export const initialState: State = adapter.getInitialCrudState();
