import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndCharacterClassVariantRequiresSkill} from '@models/vo/dnd-character-class-variant-requires-skill';

export const adapter: EntityCrudAdapter<DndCharacterClassVariantRequiresSkill> = createCrudEntityAdapter<DndCharacterClassVariantRequiresSkill>({
	selectId: model => DndCharacterClassVariantRequiresSkill.selectId(model),
});

export interface State extends EntityCrudState<DndCharacterClassVariantRequiresSkill> {
};

export const initialState: State = adapter.getInitialCrudState();
