import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndFeat} from '@models/vo/dnd-feat';

export const adapter: EntityCrudAdapter<DndFeat> = createCrudEntityAdapter<DndFeat>({
	selectId: model => DndFeat.selectId(model),
});

export interface State extends EntityCrudState<DndFeat> {
};

export const initialState: State = adapter.getInitialCrudState();
