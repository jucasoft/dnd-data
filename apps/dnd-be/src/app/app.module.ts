import {Module} from '@nestjs/common';
import {AppController} from './app.controller';
import {AppService} from './app.service';
import {SpellModule} from './spell/spell.module';
import {TypeOrmModule} from '@nestjs/typeorm';
import {Spell} from './spell/entities/spell.entity';
import {environment} from '../environments/environment';

@Module({
  imports: [TypeOrmModule.forRoot(
    {
      type: 'mongodb',
      url: environment.MONGO_DB_SRV,
      entities: [Spell],
      useUnifiedTopology: true,
      useNewUrlParser: true
    }
  ), SpellModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {
}
