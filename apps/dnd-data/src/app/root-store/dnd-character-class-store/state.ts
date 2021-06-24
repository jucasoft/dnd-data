import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndCharacterClass} from '@models/vo/dnd-character-class';

export const adapter: EntityCrudAdapter<DndCharacterClass> = createCrudEntityAdapter<DndCharacterClass>({
	selectId: model => DndCharacterClass.selectId(model),
});

export type State = EntityCrudState<DndCharacterClass>;

export const initialState: State = adapter.getInitialCrudState();
