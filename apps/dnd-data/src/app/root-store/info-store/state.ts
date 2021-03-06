import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {Info} from '@models/vo/info';

export const adapter: EntityCrudAdapter<Info> = createCrudEntityAdapter<Info>({
  selectId: model => Info.selectId(model),
});

export interface State extends EntityCrudState<Info> {
};

export const initialState: State = adapter.getInitialCrudState();
