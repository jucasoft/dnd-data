import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndFeatCategory} from '@models/vo/dnd-feat-category';

export const adapter: EntityCrudAdapter<DndFeatCategory> = createCrudEntityAdapter<DndFeatCategory>({
	selectId: model => DndFeatCategory.selectId(model),
});

export interface State extends EntityCrudState<DndFeatCategory> {
};

export const initialState: State = adapter.getInitialCrudState();
