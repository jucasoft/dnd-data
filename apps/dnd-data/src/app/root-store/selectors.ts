import {DndTextFeatPrerequisiteStoreSelectors} from '@root-store/dnd-text-feat-prerequisite-store';
import {DndSpellSubschoolStoreSelectors} from '@root-store/dnd-spell-subschool-store';
import {DndSpellSchoolStoreSelectors} from '@root-store/dnd-spell-school-store';
import {DndSpellDomainLevelStoreSelectors} from '@root-store/dnd-spell-domain-level-store';
import {DndSpellDescriptorsStoreSelectors} from '@root-store/dnd-spell-descriptors-store';
import {DndSpellDescriptorStoreSelectors} from '@root-store/dnd-spell-descriptor-store';
import {DndSpellClassLevelStoreSelectors} from '@root-store/dnd-spell-class-level-store';
import {DndSpellStoreSelectors} from '@root-store/dnd-spell-store';
import {DndSpecialFeatPrerequisiteStoreSelectors} from '@root-store/dnd-special-feat-prerequisite-store';
import {DndSkillVariantStoreSelectors} from '@root-store/dnd-skill-variant-store';
import {DndSkillStoreSelectors} from '@root-store/dnd-skill-store';
import {DndRulesConditionStoreSelectors} from '@root-store/dnd-rules-condition-store';
import {DndRulebookStoreSelectors} from '@root-store/dnd-rulebook-store';
import {DndRaceTypeStoreSelectors} from '@root-store/dnd-race-type-store';
import {DndRaceSpeedTypeStoreSelectors} from '@root-store/dnd-race-speed-type-store';
import {DndRaceSpeedStoreSelectors} from '@root-store/dnd-race-speed-store';
import {DndRaceSizeStoreSelectors} from '@root-store/dnd-race-size-store';
import {DndRaceFavoredCharacterClassStoreSelectors} from '@root-store/dnd-race-favored-character-class-store';
import {DndRaceBonusLanguageStoreSelectors} from '@root-store/dnd-race-bonus-language-store';
import {DndRaceAutomaticLanguageStoreSelectors} from '@root-store/dnd-race-automatic-language-store';
import {DndRaceStoreSelectors} from '@root-store/dnd-race-store';
import {DndLanguageStoreSelectors} from '@root-store/dnd-language-store';
import {DndFeatSpecialFeatPrerequisiteStoreSelectors} from '@root-store/dnd-feat-special-feat-prerequisite-store';
import {DndFeatRequiresSkillStoreSelectors} from '@root-store/dnd-feat-requires-skill-store';
import {DndFeatRequiresFeatStoreSelectors} from '@root-store/dnd-feat-requires-feat-store';
import {DndFeatFeatCategoriesStoreSelectors} from '@root-store/dnd-feat-feat-categories-store';
import {DndFeatCategoryStoreSelectors} from '@root-store/dnd-feat-category-store';
import {DndFeatStoreSelectors} from '@root-store/dnd-feat-store';
import {DndEditionStoreSelectors} from '@root-store/dnd-edition-store';
import {DndDomainStoreSelectors} from '@root-store/dnd-domain-store';
import {DndCharacterClassVariantRequiresSkillStoreSelectors} from '@root-store/dnd-character-class-variant-requires-skill-store';
import {DndCharacterClassVariantRequiresRaceStoreSelectors} from '@root-store/dnd-character-class-variant-requires-race-store';
import {DndCharacterClassVariantRequiresFeatStoreSelectors} from '@root-store/dnd-character-class-variant-requires-feat-store';
import {DndCharacterClassVariantClassSkillStoreSelectors} from '@root-store/dnd-character-class-variant-class-skill-store';
import {DndCharacterClassVariantStoreSelectors} from '@root-store/dnd-character-class-variant-store';
import {DndCharacterClassStoreSelectors} from '@root-store/dnd-character-class-store';
import {InfoStoreSelectors} from '@root-store/info-store';
import {PgStoreSelectors} from '@root-store/pg-store';
import {SpellsInventoryStoreSelectors} from '@root-store/spells-inventory-store';
import {SpellStoreSelectors} from '@root-store/spell-store';
import {createSelectorFactory, defaultMemoize} from '@ngrx/store';

const customMemoizer = (aFn) => defaultMemoize(aFn, (a: any, b: any) => a === b);

export const selectError = createSelectorFactory(customMemoizer)(
DndTextFeatPrerequisiteStoreSelectors.selectError,
DndSpellSubschoolStoreSelectors.selectError,
DndSpellSchoolStoreSelectors.selectError,
DndSpellDomainLevelStoreSelectors.selectError,
DndSpellDescriptorsStoreSelectors.selectError,
DndSpellDescriptorStoreSelectors.selectError,
DndSpellClassLevelStoreSelectors.selectError,
DndSpellStoreSelectors.selectError,
DndSpecialFeatPrerequisiteStoreSelectors.selectError,
DndSkillVariantStoreSelectors.selectError,
DndSkillStoreSelectors.selectError,
DndRulesConditionStoreSelectors.selectError,
DndRulebookStoreSelectors.selectError,
DndRaceTypeStoreSelectors.selectError,
DndRaceSpeedTypeStoreSelectors.selectError,
DndRaceSpeedStoreSelectors.selectError,
DndRaceSizeStoreSelectors.selectError,
DndRaceFavoredCharacterClassStoreSelectors.selectError,
DndRaceBonusLanguageStoreSelectors.selectError,
DndRaceAutomaticLanguageStoreSelectors.selectError,
DndRaceStoreSelectors.selectError,
DndLanguageStoreSelectors.selectError,
DndFeatSpecialFeatPrerequisiteStoreSelectors.selectError,
DndFeatRequiresSkillStoreSelectors.selectError,
DndFeatRequiresFeatStoreSelectors.selectError,
DndFeatFeatCategoriesStoreSelectors.selectError,
DndFeatCategoryStoreSelectors.selectError,
DndFeatStoreSelectors.selectError,
DndEditionStoreSelectors.selectError,
DndDomainStoreSelectors.selectError,
DndCharacterClassVariantRequiresSkillStoreSelectors.selectError,
DndCharacterClassVariantRequiresRaceStoreSelectors.selectError,
DndCharacterClassVariantRequiresFeatStoreSelectors.selectError,
DndCharacterClassVariantClassSkillStoreSelectors.selectError,
DndCharacterClassVariantStoreSelectors.selectError,
DndCharacterClassStoreSelectors.selectError,
  InfoStoreSelectors.selectError,
  PgStoreSelectors.selectError,
  SpellsInventoryStoreSelectors.selectError,
  SpellStoreSelectors.selectError,
  (...args: string[]) => {
    console.log('selectError.args', args);
    return args.join('');
  }
);

export const selectIsLoading = createSelectorFactory(customMemoizer)(
DndTextFeatPrerequisiteStoreSelectors.selectIsLoading,
DndSpellSubschoolStoreSelectors.selectIsLoading,
DndSpellSchoolStoreSelectors.selectIsLoading,
DndSpellDomainLevelStoreSelectors.selectIsLoading,
DndSpellDescriptorsStoreSelectors.selectIsLoading,
DndSpellDescriptorStoreSelectors.selectIsLoading,
DndSpellClassLevelStoreSelectors.selectIsLoading,
DndSpellStoreSelectors.selectIsLoading,
DndSpecialFeatPrerequisiteStoreSelectors.selectIsLoading,
DndSkillVariantStoreSelectors.selectIsLoading,
DndSkillStoreSelectors.selectIsLoading,
DndRulesConditionStoreSelectors.selectIsLoading,
DndRulebookStoreSelectors.selectIsLoading,
DndRaceTypeStoreSelectors.selectIsLoading,
DndRaceSpeedTypeStoreSelectors.selectIsLoading,
DndRaceSpeedStoreSelectors.selectIsLoading,
DndRaceSizeStoreSelectors.selectIsLoading,
DndRaceFavoredCharacterClassStoreSelectors.selectIsLoading,
DndRaceBonusLanguageStoreSelectors.selectIsLoading,
DndRaceAutomaticLanguageStoreSelectors.selectIsLoading,
DndRaceStoreSelectors.selectIsLoading,
DndLanguageStoreSelectors.selectIsLoading,
DndFeatSpecialFeatPrerequisiteStoreSelectors.selectIsLoading,
DndFeatRequiresSkillStoreSelectors.selectIsLoading,
DndFeatRequiresFeatStoreSelectors.selectIsLoading,
DndFeatFeatCategoriesStoreSelectors.selectIsLoading,
DndFeatCategoryStoreSelectors.selectIsLoading,
DndFeatStoreSelectors.selectIsLoading,
DndEditionStoreSelectors.selectIsLoading,
DndDomainStoreSelectors.selectIsLoading,
DndCharacterClassVariantRequiresSkillStoreSelectors.selectIsLoading,
DndCharacterClassVariantRequiresRaceStoreSelectors.selectIsLoading,
DndCharacterClassVariantRequiresFeatStoreSelectors.selectIsLoading,
DndCharacterClassVariantClassSkillStoreSelectors.selectIsLoading,
DndCharacterClassVariantStoreSelectors.selectIsLoading,
DndCharacterClassStoreSelectors.selectIsLoading,
  InfoStoreSelectors.selectIsLoading,
  PgStoreSelectors.selectIsLoading,
  SpellsInventoryStoreSelectors.selectIsLoading,
  SpellStoreSelectors.selectIsLoading,
  (...args: boolean[]) => {
    return args.find((value => value));
  }
);
