import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSkillVariant} from '@models/vo/dnd-skill-variant';

export const adapter: EntityCrudAdapter<DndSkillVariant> = createCrudEntityAdapter<DndSkillVariant>({
	selectId: model => DndSkillVariant.selectId(model),
});

export interface State extends EntityCrudState<DndSkillVariant> {
};

export const initialState: State = adapter.getInitialCrudState();
