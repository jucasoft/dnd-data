import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {environment} from '../environments/environment';
import {SpellModule} from './spell/spell.module';
import {MongooseModule} from '@nestjs/mongoose';
import {APP_INTERCEPTOR} from '@nestjs/core';
import {TransformInterceptor} from './core/interceptors/transform.interceptor';
import {ServeStaticModule} from '@nestjs/serve-static';
import {AuthzModule} from './core/authz/authz-module';
import {SpellsInventoryModule} from './spells-inventory/spells-inventory.module';
import {PgModule} from './pg/pg.module';
import {join} from 'path';
import {InfoModule} from './info/info.module';
import {GraphQLModule} from '@nestjs/graphql';
import {DndDomainModule} from './dnd-domain/dnd-domain.module';
import {TestModule} from './test/test.module';

@Module({
  imports: [
    AuthzModule,
    MongooseModule.forRoot(environment.MONGO_DB_SRV),
    GraphQLModule.forRoot({
      installSubscriptionHandlers: true,
      autoSchemaFile: join(process.cwd(), 'apps', 'dnd-be', 'src', 'schema.gql'),
      sortSchema: true,
      playground: true,
      debug: true,
    }),
    ServeStaticModule.forRoot({
      exclude: ['/graphql*'],
      rootPath: join(__dirname, '..', 'dnd-data'),
    }),
    SpellModule,
    SpellsInventoryModule,
    PgModule,
    InfoModule,
    DndDomainModule,
    TestModule
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_INTERCEPTOR,
      useClass: TransformInterceptor,
    },
    AppService
  ],
})
export class AppModule {
}
