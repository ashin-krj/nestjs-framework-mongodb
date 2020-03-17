import { Module } from '@nestjs/common';
import { SamplePostsController } from './sample-posts.controller';
import { SamplePostsService } from './sample-posts.service';
import { MongooseModule } from '@nestjs/mongoose';
import { PostSchema } from 'src/schemas/posts.schema';

@Module({
  imports: [MongooseModule.forFeature([{ name: 'Post', schema: PostSchema }])],
  controllers: [SamplePostsController],
  providers: [SamplePostsService]
})
export class SamplePostsModule { }
