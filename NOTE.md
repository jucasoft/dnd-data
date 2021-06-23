comandi lanciati 
ng generate ngrx-entity-crud:store --name=spells-inventory --clazz=SpellsInventory --type=CRUD 
ng generate ngrx-entity-crud:store --name=png --clazz=Png --type=CRUD 
ng generate ngrx-entity-crud:section --clazz=Png --lib=primeng 
ng generate ngrx-entity-crud:store --name=comment --clazz=Comment --type=CRUD

ng generate @nestjs/schematics:resource --name=spell --path=src/app --sourceRoot=apps/dnd-be --dry-run 
ng generate @nestjs/schematics:resource --name=spellsInventory --path=src/app --sourceRoot=apps/dnd-be --dry-run 
ng generate @nestjs/schematics:resource --name=png --path=src/app --sourceRoot=apps/dnd-be --dry-run 
ng generate @nestjs/schematics:resource --name=spell --path=src/app --sourceRoot=apps/dnd-be --dry-run 
ng generate @nestjs/schematics:resource --name=comment --path=src/app
--sourceRoot=apps/dnd-be --dry-run

todo:
filtrare le classi in base a quelle del personaggio selezionato. creare colonna aggiuntiva con le classi filtrate.



ng generate ngrx-entity-crud:store --name=dnd-character-class  --clazz=DndCharacterClass   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-character-class-variant  --clazz=DndCharacterClassVariant   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-character-class-variant-class-skill  --clazz=DndCharacterClassVariantClassSkill   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-character-class-variant-requires-feat  --clazz=DndCharacterClassVariantRequiresFeat   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-character-class-variant-requires-race  --clazz=DndCharacterClassVariantRequiresRace   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-character-class-variant-requires-skill  --clazz=DndCharacterClassVariantRequiresSkill   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-domain  --clazz=DndDomain   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-edition  --clazz=DndEdition   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-feat  --clazz=DndFeat   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-feat-category  --clazz=DndFeatCategory   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-feat-feat-categories  --clazz=DndFeatFeatCategories   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-feat-requires-feat  --clazz=DndFeatRequiresFeat   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-feat-requires-skill  --clazz=DndFeatRequiresSkill   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-feat-special-feat-prerequisite  --clazz=DndFeatSpecialFeatPrerequisite   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-language  --clazz=DndLanguage   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-race  --clazz=DndRace   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-race-automatic-language  --clazz=DndRaceAutomaticLanguage   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-race-bonus-language  --clazz=DndRaceBonusLanguage   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-race-favored-character-class  --clazz=DndRaceFavoredCharacterClass   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-race-size  --clazz=DndRaceSize   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-race-speed  --clazz=DndRaceSpeed   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-race-speed-type  --clazz=DndRaceSpeedType   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-race-type  --clazz=DndRaceType   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-rulebook  --clazz=DndRulebook   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-rules-condition  --clazz=DndRulesCondition   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-skill  --clazz=DndSkill   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-skill-variant  --clazz=DndSkillVariant   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-special-feat-prerequisite  --clazz=DndSpecialFeatPrerequisite   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-spell  --clazz=DndSpell   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-spell-class-level  --clazz=DndSpellClassLevel   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-spell-descriptor  --clazz=DndSpellDescriptor   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-spell-descriptors  --clazz=DndSpellDescriptors   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-spell-domain-level  --clazz=DndSpellDomainLevel   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-spell-school  --clazz=DndSpellSchool   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-spell-subschool  --clazz=DndSpellSubschool   --type=CRUD
ng generate ngrx-entity-crud:store --name=dnd-text-feat-prerequisite  --clazz=DndTextFeatPrerequisite   --type=CRUD
