import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndSpellDomainLevel} from '@models/vo/dnd-spell-domain-level';

export const adapter: EntityCrudAdapter<DndSpellDomainLevel> = createCrudEntityAdapter<DndSpellDomainLevel>({
	selectId: model => DndSpellDomainLevel.selectId(model),
});

export type State = EntityCrudState<DndSpellDomainLevel>;

export const initialState: State = adapter.getInitialCrudState();
