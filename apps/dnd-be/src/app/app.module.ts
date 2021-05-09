import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {environment} from '../environments/environment';
import {SpellModule} from './spell/spell.module';
import {MongooseModule} from '@nestjs/mongoose';
import {APP_INTERCEPTOR} from '@nestjs/core';
import {TransformInterceptor} from './core/interceptors/transform.interceptor';

@Module({
  imports: [
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
