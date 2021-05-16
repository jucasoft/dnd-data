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

console.log('__dirname', __dirname);

@Module({
  imports: [
    AuthzModule,
    ServeStaticModule.forRoot({
      rootPath: (__dirname + '/../' + 'dnd-data'),
    }),
    MongooseModule.forRoot(environment.MONGO_DB_SRV),
    SpellModule],
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
