import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRaceType} from '@models/vo/dnd-race-type';

export const adapter: EntityCrudAdapter<DndRaceType> = createCrudEntityAdapter<DndRaceType>({
	selectId: model => DndRaceType.selectId(model),
});

export type State = EntityCrudState<DndRaceType>;

export const initialState: State = adapter.getInitialCrudState();
