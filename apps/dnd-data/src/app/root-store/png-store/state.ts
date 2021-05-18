import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Png} from '@models/vo/png';

export const adapter: EntityCrudAdapter<Png> = createCrudEntityAdapter<Png>({
	selectId: model => Png.selectId(model),
});

export interface State extends EntityCrudState<Png> {
};

export const initialState: State = adapter.getInitialCrudState();
