import {MiddlewareConsumer, Module, RequestMethod} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {environment} from '../environments/environment';
import {SpellModule} from './spell/spell.module';
import {MongooseModule} from '@nestjs/mongoose';
import {APP_INTERCEPTOR} from '@nestjs/core';
import {TransformInterceptor} from './core/interceptors/transform.interceptor';
import {ServeStaticModule} from '@nestjs/serve-static';
import {AuthenticationMiddleware} from './core/middlewares/authentication.middleware';

console.log('__dirname', __dirname);

@Module({
  imports: [
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
  public configure(consumer: MiddlewareConsumer) {
    consumer
      .apply(AuthenticationMiddleware)
      .forRoutes({ path: 'spell', method: RequestMethod.ALL });
  }
}
