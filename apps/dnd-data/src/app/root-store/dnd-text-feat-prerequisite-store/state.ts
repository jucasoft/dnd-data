import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndTextFeatPrerequisite} from '@models/vo/dnd-text-feat-prerequisite';

export const adapter: EntityCrudAdapter<DndTextFeatPrerequisite> = createCrudEntityAdapter<DndTextFeatPrerequisite>({
	selectId: model => DndTextFeatPrerequisite.selectId(model),
});

export type State = EntityCrudState<DndTextFeatPrerequisite>;

export const initialState: State = adapter.getInitialCrudState();
