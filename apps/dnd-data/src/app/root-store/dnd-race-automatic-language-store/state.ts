import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndRaceAutomaticLanguage} from '@models/vo/dnd-race-automatic-language';

export const adapter: EntityCrudAdapter<DndRaceAutomaticLanguage> = createCrudEntityAdapter<DndRaceAutomaticLanguage>({
	selectId: model => DndRaceAutomaticLanguage.selectId(model),
});

export interface State extends EntityCrudState<DndRaceAutomaticLanguage> {
};

export const initialState: State = adapter.getInitialCrudState();
