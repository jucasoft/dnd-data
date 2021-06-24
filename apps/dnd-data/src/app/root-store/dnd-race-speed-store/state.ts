import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRaceSpeed} from '@models/vo/dnd-race-speed';

export const adapter: EntityCrudAdapter<DndRaceSpeed> = createCrudEntityAdapter<DndRaceSpeed>({
	selectId: model => DndRaceSpeed.selectId(model),
});

export type State = EntityCrudState<DndRaceSpeed>;

export const initialState: State = adapter.getInitialCrudState();
