import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSpellSubschool} from '@models/vo/dnd-spell-subschool';

export const adapter: EntityCrudAdapter<DndSpellSubschool> = createCrudEntityAdapter<DndSpellSubschool>({
	selectId: model => DndSpellSubschool.selectId(model),
});

export interface State extends EntityCrudState<DndSpellSubschool> {
};

export const initialState: State = adapter.getInitialCrudState();
