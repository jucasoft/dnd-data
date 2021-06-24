import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Pg} from '@models/vo/pg';

export const adapter: EntityCrudAdapter<Pg> = createCrudEntityAdapter<Pg>({
	selectId: model => Pg.selectId(model),
});

export type State = EntityCrudState<Pg>;

export const initialState: State = adapter.getInitialCrudState();
