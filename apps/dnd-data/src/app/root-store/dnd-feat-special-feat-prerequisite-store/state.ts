import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndFeatSpecialFeatPrerequisite} from '@models/vo/dnd-feat-special-feat-prerequisite';

export const adapter: EntityCrudAdapter<DndFeatSpecialFeatPrerequisite> = createCrudEntityAdapter<DndFeatSpecialFeatPrerequisite>({
	selectId: model => DndFeatSpecialFeatPrerequisite.selectId(model),
});

export type State = EntityCrudState<DndFeatSpecialFeatPrerequisite>;

export const initialState: State = adapter.getInitialCrudState();
