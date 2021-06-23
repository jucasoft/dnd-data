import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSkill} from '@models/vo/dnd-skill';

export const adapter: EntityCrudAdapter<DndSkill> = createCrudEntityAdapter<DndSkill>({
	selectId: model => DndSkill.selectId(model),
});

export interface State extends EntityCrudState<DndSkill> {
};

export const initialState: State = adapter.getInitialCrudState();
