import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSpellClassLevel} from '@models/vo/dnd-spell-class-level';

export const adapter: EntityCrudAdapter<DndSpellClassLevel> = createCrudEntityAdapter<DndSpellClassLevel>({
	selectId: model => DndSpellClassLevel.selectId(model),
});

export type State = EntityCrudState<DndSpellClassLevel>;

export const initialState: State = adapter.getInitialCrudState();