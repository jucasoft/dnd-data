import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSpecialFeatPrerequisite} from '@models/vo/dnd-special-feat-prerequisite';

export const adapter: EntityCrudAdapter<DndSpecialFeatPrerequisite> = createCrudEntityAdapter<DndSpecialFeatPrerequisite>({
	selectId: model => DndSpecialFeatPrerequisite.selectId(model),
});

export interface State extends EntityCrudState<DndSpecialFeatPrerequisite> {
};

export const initialState: State = adapter.getInitialCrudState();
