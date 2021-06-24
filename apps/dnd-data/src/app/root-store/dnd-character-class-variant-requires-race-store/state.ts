import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndCharacterClassVariantRequiresRace} from '@models/vo/dnd-character-class-variant-requires-race';

export const adapter: EntityCrudAdapter<DndCharacterClassVariantRequiresRace> = createCrudEntityAdapter<DndCharacterClassVariantRequiresRace>({
	selectId: model => DndCharacterClassVariantRequiresRace.selectId(model),
});

export type State = EntityCrudState<DndCharacterClassVariantRequiresRace>;

export const initialState: State = adapter.getInitialCrudState();
