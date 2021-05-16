comandi lanciati
ng generate ngrx-entity-crud:store --name=spells-inventory --clazz=SpellsInventory --type=CRUD

ng generate @nestjs/schematics:resource --name=spell --path=src/app --sourceRoot=apps/dnd-be  --dry-run
ng generate @nestjs/schematics:resource --name=spellsInventory --path=src/app --sourceRoot=apps/dnd-be  --dry-run
