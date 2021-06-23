import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndDomain} from '@models/vo/dnd-domain';

export const adapter: EntityCrudAdapter<DndDomain> = createCrudEntityAdapter<DndDomain>({
	selectId: model => DndDomain.selectId(model),
});

export interface State extends EntityCrudState<DndDomain> {
};

export const initialState: State = adapter.getInitialCrudState();
