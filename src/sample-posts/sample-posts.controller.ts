import { Controller, Get, Post, Body, Param, Put, Delete, UsePipes } from '@nestjs/common';
import { SamplePostsService } from './sample-posts.service';
import { ValidationPipe } from 'src/shared/validation.pipe';

@Controller('api/sample-posts')
export class SamplePostsController {

    constructor(private readonly samplePostService: SamplePostsService) { }

    @Get('all')
    async getPosts() {
        const posts = await this.samplePostService.getAllPosts();
        return posts;
    }

    @Post('create')
    @UsePipes(new ValidationPipe())
    async createPost(@Body() postDetails) {
        const response = await this.samplePostService.createPost(postDetails);
        return response;
    }

    @Get(':id')
    async getSinglePost(@Param('id') id) {
        const response = await this.samplePostService.getPost(id);
        return response;
    }

    @Put(':id')
    @UsePipes(new ValidationPipe())
    async updatePost(@Param('id') id, @Body() postDetails) {
        const response = await this.samplePostService.updatePost(id, postDetails);
        return response;
    }

    @Delete(':id')
    async deletePost(@Param('id') id) {
        const response = await this.samplePostService.deletePost(id);
        return response;
    }
}
