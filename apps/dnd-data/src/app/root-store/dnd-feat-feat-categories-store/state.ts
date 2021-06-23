import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndFeatFeatCategories} from '@models/vo/dnd-feat-feat-categories';

export const adapter: EntityCrudAdapter<DndFeatFeatCategories> = createCrudEntityAdapter<DndFeatFeatCategories>({
	selectId: model => DndFeatFeatCategories.selectId(model),
});

export interface State extends EntityCrudState<DndFeatFeatCategories> {
};

export const initialState: State = adapter.getInitialCrudState();
