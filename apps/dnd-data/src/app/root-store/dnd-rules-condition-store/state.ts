import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRulesCondition} from '@models/vo/dnd-rules-condition';

export const adapter: EntityCrudAdapter<DndRulesCondition> = createCrudEntityAdapter<DndRulesCondition>({
	selectId: model => DndRulesCondition.selectId(model),
});

export interface State extends EntityCrudState<DndRulesCondition> {
};

export const initialState: State = adapter.getInitialCrudState();
