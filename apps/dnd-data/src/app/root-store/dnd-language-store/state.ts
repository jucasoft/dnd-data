import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndLanguage} from '@models/vo/dnd-language';

export const adapter: EntityCrudAdapter<DndLanguage> = createCrudEntityAdapter<DndLanguage>({
	selectId: model => DndLanguage.selectId(model),
});

export interface State extends EntityCrudState<DndLanguage> {
};

export const initialState: State = adapter.getInitialCrudState();
