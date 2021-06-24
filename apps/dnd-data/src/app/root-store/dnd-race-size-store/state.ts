import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRaceSize} from '@models/vo/dnd-race-size';

export const adapter: EntityCrudAdapter<DndRaceSize> = createCrudEntityAdapter<DndRaceSize>({
	selectId: model => DndRaceSize.selectId(model),
});

export type State = EntityCrudState<DndRaceSize>;

export const initialState: State = adapter.getInitialCrudState();
