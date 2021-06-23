import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndFeatRequiresSkill} from '@models/vo/dnd-feat-requires-skill';

export const adapter: EntityCrudAdapter<DndFeatRequiresSkill> = createCrudEntityAdapter<DndFeatRequiresSkill>({
	selectId: model => DndFeatRequiresSkill.selectId(model),
});

export interface State extends EntityCrudState<DndFeatRequiresSkill> {
};

export const initialState: State = adapter.getInitialCrudState();
