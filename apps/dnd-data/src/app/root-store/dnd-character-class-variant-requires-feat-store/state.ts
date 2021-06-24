import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndCharacterClassVariantRequiresFeat} from '@models/vo/dnd-character-class-variant-requires-feat';

export const adapter: EntityCrudAdapter<DndCharacterClassVariantRequiresFeat> = createCrudEntityAdapter<DndCharacterClassVariantRequiresFeat>({
	selectId: model => DndCharacterClassVariantRequiresFeat.selectId(model),
});

export type State = EntityCrudState<DndCharacterClassVariantRequiresFeat>;

export const initialState: State = adapter.getInitialCrudState();
