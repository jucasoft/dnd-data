import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSpellSchool} from '@models/vo/dnd-spell-school';

export const adapter: EntityCrudAdapter<DndSpellSchool> = createCrudEntityAdapter<DndSpellSchool>({
	selectId: model => DndSpellSchool.selectId(model),
});

export interface State extends EntityCrudState<DndSpellSchool> {
};

export const initialState: State = adapter.getInitialCrudState();
