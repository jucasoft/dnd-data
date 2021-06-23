import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndFeatRequiresFeat} from '@models/vo/dnd-feat-requires-feat';

export const adapter: EntityCrudAdapter<DndFeatRequiresFeat> = createCrudEntityAdapter<DndFeatRequiresFeat>({
	selectId: model => DndFeatRequiresFeat.selectId(model),
});

export interface State extends EntityCrudState<DndFeatRequiresFeat> {
};

export const initialState: State = adapter.getInitialCrudState();
