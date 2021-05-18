import {Module} from '@nestjs/common';
import {PngService} from './png.service';
import {PngController} from './png.controller';
import {MongooseModule} from '@nestjs/mongoose';
import {Png, PngSchema} from './entities/png.entity';

@Module({
  imports: [
    MongooseModule.forFeature(
      [
        {name: Png.name, schema: PngSchema}
      ]
    )
  ],
  controllers: [PngController],
  providers: [PngService]
})
export class PngModule {
}
