comandi lanciati
ng generate ngrx-entity-crud:store --name=spells-inventory --clazz=SpellsInventory --type=CRUD
ng generate ngrx-entity-crud:store --name=png --clazz=Png --type=CRUD

ng generate ngrx-entity-crud:section --clazz=Png --lib=primeng

ng generate @nestjs/schematics:resource --name=spell --path=src/app --sourceRoot=apps/dnd-be  --dry-run
ng generate @nestjs/schematics:resource --name=spellsInventory --path=src/app --sourceRoot=apps/dnd-be  --dry-run
ng generate @nestjs/schematics:resource --name=png --path=src/app --sourceRoot=apps/dnd-be  --dry-run
