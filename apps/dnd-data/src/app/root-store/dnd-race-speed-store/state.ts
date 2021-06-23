import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRaceSpeed} from '@models/vo/dnd-race-speed';

export const adapter: EntityCrudAdapter<DndRaceSpeed> = createCrudEntityAdapter<DndRaceSpeed>({
	selectId: model => DndRaceSpeed.selectId(model),
});

export interface State extends EntityCrudState<DndRaceSpeed> {
};

export const initialState: State = adapter.getInitialCrudState();
