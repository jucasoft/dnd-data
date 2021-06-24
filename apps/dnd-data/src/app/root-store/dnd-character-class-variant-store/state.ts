import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndCharacterClassVariant} from '@models/vo/dnd-character-class-variant';

export const adapter: EntityCrudAdapter<DndCharacterClassVariant> = createCrudEntityAdapter<DndCharacterClassVariant>({
	selectId: model => DndCharacterClassVariant.selectId(model),
});

export type State = EntityCrudState<DndCharacterClassVariant>;

export const initialState: State = adapter.getInitialCrudState();