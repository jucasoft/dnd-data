import {createCrudEntityAdapter, EntityCrudAdapter, EntityCrudState} from 'ngrx-entity-crud';
import {DndCharacterClassVariantClassSkill} from '@models/vo/dnd-character-class-variant-class-skill';

export const adapter: EntityCrudAdapter<DndCharacterClassVariantClassSkill> = createCrudEntityAdapter<DndCharacterClassVariantClassSkill>({
	selectId: model => DndCharacterClassVariantClassSkill.selectId(model),
});

export type State = EntityCrudState<DndCharacterClassVariantClassSkill>;

export const initialState: State = adapter.getInitialCrudState();
