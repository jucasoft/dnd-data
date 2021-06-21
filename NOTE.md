comandi lanciati
ng generate ngrx-entity-crud:store --name=spells-inventory --clazz=SpellsInventory --type=CRUD
ng generate ngrx-entity-crud:store --name=png --clazz=Png --type=CRUD
ng generate ngrx-entity-crud:section --clazz=Png --lib=primeng
ng generate ngrx-entity-crud:store --name=comment --clazz=Comment --type=CRUD

ng generate @nestjs/schematics:resource --name=spell --path=src/app --sourceRoot=apps/dnd-be  --dry-run
ng generate @nestjs/schematics:resource --name=spellsInventory --path=src/app --sourceRoot=apps/dnd-be  --dry-run
ng generate @nestjs/schematics:resource --name=png --path=src/app --sourceRoot=apps/dnd-be  --dry-run
ng generate @nestjs/schematics:resource --name=spell --path=src/app --sourceRoot=apps/dnd-be  --dry-run
ng generate @nestjs/schematics:resource --name=comment --path=src/app --sourceRoot=apps/dnd-be  --dry-run


todo:
filtrare le classi in base a quelle del personaggio selezionato. creare colonna aggiuntiva con le classi filtrate.

creazione resource per graphQl
ng generate @nestjs/schematics:resource --name=DndDomain --path=src/app --sourceRoot=apps/dnd-be  --dry-run
