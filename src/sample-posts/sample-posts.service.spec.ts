import { Test, TestingModule } from '@nestjs/testing';
import { SamplePostsService } from './sample-posts.service';

describe('SamplePostsService', () => {
  let service: SamplePostsService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [SamplePostsService],
    }).compile();

    service = module.get<SamplePostsService>(SamplePostsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
