import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRaceSpeedType} from '@models/vo/dnd-race-speed-type';

export const adapter: EntityCrudAdapter<DndRaceSpeedType> = createCrudEntityAdapter<DndRaceSpeedType>({
	selectId: model => DndRaceSpeedType.selectId(model),
});

export type State = EntityCrudState<DndRaceSpeedType>;

export const initialState: State = adapter.getInitialCrudState();
