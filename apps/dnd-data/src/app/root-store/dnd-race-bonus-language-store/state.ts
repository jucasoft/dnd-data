import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRaceBonusLanguage} from '@models/vo/dnd-race-bonus-language';

export const adapter: EntityCrudAdapter<DndRaceBonusLanguage> = createCrudEntityAdapter<DndRaceBonusLanguage>({
	selectId: model => DndRaceBonusLanguage.selectId(model),
});

export type State = EntityCrudState<DndRaceBonusLanguage>;

export const initialState: State = adapter.getInitialCrudState();
