import { Test, TestingModule } from '@nestjs/testing';
import { PngService } from './png.service';

describe('PngService', () => {
  let service: PngService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PngService],
    }).compile();

    service = module.get<PngService>(PngService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
