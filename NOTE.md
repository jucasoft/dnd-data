comandi lanciati ng generate ngrx-entity-crud:store --name=spells-inventory --clazz=SpellsInventory --type=CRUD ng generate ngrx-entity-crud:store --name=png --clazz=Png --type=CRUD ng generate ngrx-entity-crud:section --clazz=Png --lib=primeng ng generate ngrx-entity-crud:store --name=comment --clazz=Comment --type=CRUD

ng generate @nestjs/schematics:resource --name=spell --path=src/app --sourceRoot=apps/dnd-be --dry-run ng generate @nestjs/schematics:resource --name=spellsInventory --path=src/app --sourceRoot=apps/dnd-be --dry-run ng generate @nestjs/schematics:resource --name=png --path=src/app --sourceRoot=apps/dnd-be --dry-run ng generate @nestjs/schematics:resource --name=spell --path=src/app --sourceRoot=apps/dnd-be --dry-run ng generate @nestjs/schematics:resource --name=comment --path=src/app
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
