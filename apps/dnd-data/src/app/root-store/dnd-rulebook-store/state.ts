import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRulebook} from '@models/vo/dnd-rulebook';

export const adapter: EntityCrudAdapter<DndRulebook> = createCrudEntityAdapter<DndRulebook>({
	selectId: model => DndRulebook.selectId(model),
});

export interface State extends EntityCrudState<DndRulebook> {
};

export const initialState: State = adapter.getInitialCrudState();
