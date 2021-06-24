import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndEdition} from '@models/vo/dnd-edition';

export const adapter: EntityCrudAdapter<DndEdition> = createCrudEntityAdapter<DndEdition>({
	selectId: model => DndEdition.selectId(model),
});

export type State = EntityCrudState<DndEdition>;

export const initialState: State = adapter.getInitialCrudState();
