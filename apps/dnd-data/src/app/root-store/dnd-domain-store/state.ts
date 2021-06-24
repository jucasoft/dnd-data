import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndDomain} from '@models/vo/dnd-domain';

export const adapter: EntityCrudAdapter<DndDomain> = createCrudEntityAdapter<DndDomain>({
	selectId: model => DndDomain.selectId(model),
});

export type State = EntityCrudState<DndDomain>;

export const initialState: State = adapter.getInitialCrudState();
