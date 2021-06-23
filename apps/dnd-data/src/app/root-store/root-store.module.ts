import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {StoreModule} from '@ngrx/store';
import {EffectsModule} from '@ngrx/effects';
import {metaReducers, reducers} from '@root-store/root-reducer';
import {RouterStoreModule} from './router-store';
import {environment} from '../../environments/environment';
import {StoreDevtoolsModule} from '@ngrx/store-devtools';
import {SlideMenuStoreModule} from '@root-store/slide-menu-store';
import {SpellStoreModule} from '@root-store/spell-store';
import {AuthStoreModule} from '@root-store/auth-store';
import {SpellsInventoryStoreModule} from '@root-store/spells-inventory-store';
import { PgStoreModule } from '@root-store/pg-store';
import { InfoStoreModule } from '@root-store/info-store';
import { DndCharacterClassStoreModule } from '@root-store/dnd-character-class-store';
import { DndCharacterClassVariantStoreModule } from '@root-store/dnd-character-class-variant-store';
import { DndCharacterClassVariantClassSkillStoreModule } from '@root-store/dnd-character-class-variant-class-skill-store';
import { DndCharacterClassVariantRequiresFeatStoreModule } from '@root-store/dnd-character-class-variant-requires-feat-store';
import { DndCharacterClassVariantRequiresRaceStoreModule } from '@root-store/dnd-character-class-variant-requires-race-store';
import { DndCharacterClassVariantRequiresSkillStoreModule } from '@root-store/dnd-character-class-variant-requires-skill-store';
import { DndDomainStoreModule } from '@root-store/dnd-domain-store';
import { DndEditionStoreModule } from '@root-store/dnd-edition-store';
import { DndFeatStoreModule } from '@root-store/dnd-feat-store';
import { DndFeatCategoryStoreModule } from '@root-store/dnd-feat-category-store';
import { DndFeatFeatCategoriesStoreModule } from '@root-store/dnd-feat-feat-categories-store';
import { DndFeatRequiresFeatStoreModule } from '@root-store/dnd-feat-requires-feat-store';
import { DndFeatRequiresSkillStoreModule } from '@root-store/dnd-feat-requires-skill-store';
import { DndFeatSpecialFeatPrerequisiteStoreModule } from '@root-store/dnd-feat-special-feat-prerequisite-store';
import { DndLanguageStoreModule } from '@root-store/dnd-language-store';
import { DndRaceStoreModule } from '@root-store/dnd-race-store';
import { DndRaceAutomaticLanguageStoreModule } from '@root-store/dnd-race-automatic-language-store';
import { DndRaceBonusLanguageStoreModule } from '@root-store/dnd-race-bonus-language-store';
import { DndRaceFavoredCharacterClassStoreModule } from '@root-store/dnd-race-favored-character-class-store';
import { DndRaceSizeStoreModule } from '@root-store/dnd-race-size-store';
import { DndRaceSpeedStoreModule } from '@root-store/dnd-race-speed-store';
import { DndRaceSpeedTypeStoreModule } from '@root-store/dnd-race-speed-type-store';
import { DndRaceTypeStoreModule } from '@root-store/dnd-race-type-store';
import { DndRulebookStoreModule } from '@root-store/dnd-rulebook-store';
import { DndRulesConditionStoreModule } from '@root-store/dnd-rules-condition-store';
import { DndSkillStoreModule } from '@root-store/dnd-skill-store';
import { DndSkillVariantStoreModule } from '@root-store/dnd-skill-variant-store';
import { DndSpecialFeatPrerequisiteStoreModule } from '@root-store/dnd-special-feat-prerequisite-store';
import { DndSpellStoreModule } from '@root-store/dnd-spell-store';
import { DndSpellClassLevelStoreModule } from '@root-store/dnd-spell-class-level-store';
import { DndSpellDescriptorStoreModule } from '@root-store/dnd-spell-descriptor-store';
import { DndSpellDescriptorsStoreModule } from '@root-store/dnd-spell-descriptors-store';
import { DndSpellDomainLevelStoreModule } from '@root-store/dnd-spell-domain-level-store';
import { DndSpellSchoolStoreModule } from '@root-store/dnd-spell-school-store';
import { DndSpellSubschoolStoreModule } from '@root-store/dnd-spell-subschool-store';
import { DndTextFeatPrerequisiteStoreModule } from '@root-store/dnd-text-feat-prerequisite-store';

@NgModule({
  imports: [
    CommonModule,
    RouterStoreModule,
    SlideMenuStoreModule,
    StoreModule.forRoot(reducers, {
      metaReducers,
      runtimeChecks: {strictStateImmutability: true, strictActionImmutability: true}
    }),
    EffectsModule.forRoot([]),
    StoreDevtoolsModule.instrument({
      maxAge: 25, // Retains last 25 states
      logOnly: environment.production, // Restrict extension to log-only mode
    }),
    SpellStoreModule,
    AuthStoreModule,
    SpellsInventoryStoreModule,
    PgStoreModule,
    InfoStoreModule,
    DndCharacterClassStoreModule,
    DndCharacterClassVariantStoreModule,
    DndCharacterClassVariantClassSkillStoreModule,
    DndCharacterClassVariantRequiresFeatStoreModule,
    DndCharacterClassVariantRequiresRaceStoreModule,
    DndCharacterClassVariantRequiresSkillStoreModule,
    DndDomainStoreModule,
    DndEditionStoreModule,
    DndFeatStoreModule,
    DndFeatCategoryStoreModule,
    DndFeatFeatCategoriesStoreModule,
    DndFeatRequiresFeatStoreModule,
    DndFeatRequiresSkillStoreModule,
    DndFeatSpecialFeatPrerequisiteStoreModule,
    DndLanguageStoreModule,
    DndRaceStoreModule,
    DndRaceAutomaticLanguageStoreModule,
    DndRaceBonusLanguageStoreModule,
    DndRaceFavoredCharacterClassStoreModule,
    DndRaceSizeStoreModule,
    DndRaceSpeedStoreModule,
    DndRaceSpeedTypeStoreModule,
    DndRaceTypeStoreModule,
    DndRulebookStoreModule,
    DndRulesConditionStoreModule,
    DndSkillStoreModule,
    DndSkillVariantStoreModule,
    DndSpecialFeatPrerequisiteStoreModule,
    DndSpellStoreModule,
    DndSpellClassLevelStoreModule,
    DndSpellDescriptorStoreModule,
    DndSpellDescriptorsStoreModule,
    DndSpellDomainLevelStoreModule,
    DndSpellSchoolStoreModule,
    DndSpellSubschoolStoreModule,
    DndTextFeatPrerequisiteStoreModule,
  ],
  declarations: []
})
export class RootStoreModule {
}
