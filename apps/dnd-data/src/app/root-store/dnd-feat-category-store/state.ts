import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndFeatCategory} from '@models/vo/dnd-feat-category';

export const adapter: EntityCrudAdapter<DndFeatCategory> = createCrudEntityAdapter<DndFeatCategory>({
	selectId: model => DndFeatCategory.selectId(model),
});

export type State = EntityCrudState<DndFeatCategory>;

export const initialState: State = adapter.getInitialCrudState();
