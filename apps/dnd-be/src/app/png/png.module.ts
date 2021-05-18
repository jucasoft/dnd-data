import { Module } from '@nestjs/common';
import { PngService } from './png.service';
import { PngController } from './png.controller';

@Module({
  controllers: [PngController],
  providers: [PngService]
})
export class PngModule {}
