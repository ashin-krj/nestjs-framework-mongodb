import { Test, TestingModule } from '@nestjs/testing';
import { SamplePostsController } from './sample-posts.controller';

describe('SamplePosts Controller', () => {
  let controller: SamplePostsController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [SamplePostsController],
    }).compile();

    controller = module.get<SamplePostsController>(SamplePostsController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
