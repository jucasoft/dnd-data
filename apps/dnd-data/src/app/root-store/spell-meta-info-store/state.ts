import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {SpellMetaInfo} from '@models/vo/spell-meta-info';

export const adapter: EntityCrudAdapter<SpellMetaInfo> = createCrudEntityAdapter<SpellMetaInfo>({
	selectId: model => SpellMetaInfo.selectId(model),
});

export interface State extends EntityCrudState<SpellMetaInfo> {
};

export const initialState: State = adapter.getInitialCrudState();
