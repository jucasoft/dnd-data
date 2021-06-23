import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRaceFavoredCharacterClass} from '@models/vo/dnd-race-favored-character-class';

export const adapter: EntityCrudAdapter<DndRaceFavoredCharacterClass> = createCrudEntityAdapter<DndRaceFavoredCharacterClass>({
	selectId: model => DndRaceFavoredCharacterClass.selectId(model),
});

export interface State extends EntityCrudState<DndRaceFavoredCharacterClass> {
};

export const initialState: State = adapter.getInitialCrudState();
