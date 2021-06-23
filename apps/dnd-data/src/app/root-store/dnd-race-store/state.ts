import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRace} from '@models/vo/dnd-race';

export const adapter: EntityCrudAdapter<DndRace> = createCrudEntityAdapter<DndRace>({
	selectId: model => DndRace.selectId(model),
});

export interface State extends EntityCrudState<DndRace> {
};

export const initialState: State = adapter.getInitialCrudState();
