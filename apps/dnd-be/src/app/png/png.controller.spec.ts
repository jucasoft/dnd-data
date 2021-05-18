import { Test, TestingModule } from '@nestjs/testing';
import { PngController } from './png.controller';
import { PngService } from './png.service';

describe('PngController', () => {
  let controller: PngController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [PngController],
      providers: [PngService],
    }).compile();

    controller = module.get<PngController>(PngController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
