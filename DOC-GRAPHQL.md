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
in particolare se si hanno errori nell'esequire query o mutation tramite il payload
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
