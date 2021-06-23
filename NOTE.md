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

graphQl installare dipendenze:

```
 npm i @nestjs/graphql graphql-tools graphql apollo-server-express
```

aggiungere la configurazione base del modulo:

```ts
@Module({
  imports: [
    GraphQLModule.forRoot({}),
  ],
})
export class AppModule {
}
```

creare un modulo tramite il comando `@nestjs/schematics:resource`:
```
ng generate @nestjs/schematics:resource --name=DndDomain --path=src/app --sourceRoot=apps/dnd-be  --dry-run
```
  - What transport layer do you use? · graphql-code-first
  - Would you like to generate CRUD entry points? (Y/n) · true

problemi da risolvere:
  - se si utilizza il modulo `ServeStaticModule` disabilitare la rotta di graphql, altrimenti si avrà un errore 500:

```ts
    ServeStaticModule.forRoot({
      exclude: ['/graphql*'],
      ...
    })
```

  - se si fa uso di intercettori o altri sistemi che modificano a response, fare in modo che la rotta di graphql non sia utilizzata

creazione automatica dei moduli:
```https://dev.to/lotfi/three-in-one-code-first-nestjs-graphql-mongoose-30ie
```


ng generate ngrx-entity-crud:store --name=dnd-character_class  --clazz=CharacterClass 
ng generate ngrx-entity-crud:store --name=dnd-character_class_variant  --clazz=CharacterClassVariant 
ng generate ngrx-entity-crud:store --name=dnd-character_class_variant_class_skill  --clazz=CharacterClassVariantClassSkill 
ng generate ngrx-entity-crud:store --name=dnd-character_class_variant_requires_feat  --clazz=CharacterClassVariantRequiresFeat 
ng generate ngrx-entity-crud:store --name=dnd-character_class_variant_requires_race  --clazz=CharacterClassVariantRequiresRace 
ng generate ngrx-entity-crud:store --name=dnd-character_class_variant_requires_skill  --clazz=CharacterClassVariantRequiresSkill 
ng generate ngrx-entity-crud:store --name=dnd-domain  --clazz=Domain 
ng generate ngrx-entity-crud:store --name=dnd-edition  --clazz=Edition 
ng generate ngrx-entity-crud:store --name=dnd-feat  --clazz=Feat 
ng generate ngrx-entity-crud:store --name=dnd-feat_category  --clazz=FeatCategory 
ng generate ngrx-entity-crud:store --name=dnd-feat_feat_categories  --clazz=FeatFeatCategories 
ng generate ngrx-entity-crud:store --name=dnd-feat_requires_feat  --clazz=FeatRequiresFeat 
ng generate ngrx-entity-crud:store --name=dnd-feat_requires_skill  --clazz=FeatRequiresSkill 
ng generate ngrx-entity-crud:store --name=dnd-feat_special_feat_prerequisite  --clazz=FeatSpecialFeatPrerequisite 
ng generate ngrx-entity-crud:store --name=dnd-language  --clazz=Language 
ng generate ngrx-entity-crud:store --name=dnd-race  --clazz=Race 
ng generate ngrx-entity-crud:store --name=dnd-race_automatic_language  --clazz=RaceAutomaticLanguage 
ng generate ngrx-entity-crud:store --name=dnd-race_bonus_language  --clazz=RaceBonusLanguage 
ng generate ngrx-entity-crud:store --name=dnd-race_favored_character_class  --clazz=RaceFavoredCharacterClass 
ng generate ngrx-entity-crud:store --name=dnd-race_size  --clazz=RaceSize 
ng generate ngrx-entity-crud:store --name=dnd-race_speed  --clazz=RaceSpeed 
ng generate ngrx-entity-crud:store --name=dnd-race_speed_type  --clazz=RaceSpeedType 
ng generate ngrx-entity-crud:store --name=dnd-race_type  --clazz=RaceType 
ng generate ngrx-entity-crud:store --name=dnd-rulebook  --clazz=Rulebook 
ng generate ngrx-entity-crud:store --name=dnd-rules_condition  --clazz=RulesCondition 
ng generate ngrx-entity-crud:store --name=dnd-skill  --clazz=Skill 
ng generate ngrx-entity-crud:store --name=dnd-skill_variant  --clazz=SkillVariant 
ng generate ngrx-entity-crud:store --name=dnd-special_feat_prerequisite  --clazz=SpecialFeatPrerequisite 
ng generate ngrx-entity-crud:store --name=dnd-spell  --clazz=Spell 
ng generate ngrx-entity-crud:store --name=dnd-spell_class_level  --clazz=SpellClassLevel 
ng generate ngrx-entity-crud:store --name=dnd-spell_descriptor  --clazz=SpellDescriptor 
ng generate ngrx-entity-crud:store --name=dnd-spell_descriptors  --clazz=SpellDescriptors 
ng generate ngrx-entity-crud:store --name=dnd-spell_domain_level  --clazz=SpellDomainLevel 
ng generate ngrx-entity-crud:store --name=dnd-spell_school  --clazz=SpellSchool 
ng generate ngrx-entity-crud:store --name=dnd-spell_subschool  --clazz=SpellSubschool 
ng generate ngrx-entity-crud:store --name=dnd-text_feat_prerequisite  --clazz=TextFeatPrerequisite 
