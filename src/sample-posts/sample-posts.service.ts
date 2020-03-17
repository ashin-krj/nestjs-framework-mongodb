import { Injectable, HttpException, HttpStatus } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Post } from 'src/interfaces/post.interface';
import { CreatePostDTO } from 'src/dto/create-post.dto';

@Injectable()
export class SamplePostsService {

    constructor(@InjectModel('Post') private readonly postModel: Model<Post>) { }

    async getAllPosts(): Promise<Post[]> {
        const posts = await this.postModel.find();
        return posts;
    }

    async createPost(postData: CreatePostDTO): Promise<Post> {
        const post = await this.postModel.create(postData);
        return post;
    }

    async getPost(id: string): Promise<Post> {
        const post = await this.findPost(id);

        return post;
    }

    private async findPost(id: string): Promise<Post> {
        const post = await this.postModel.findById(id);
        if (!post) {
            throw new HttpException('Not found', HttpStatus.NOT_FOUND);
        }
        return post;
    }

    async updatePost(id: string, data: Partial<CreatePostDTO>): Promise<Post> {
        let post = await this.findPost(id);
        await this.postModel.updateOne({ _id: id }, data);
        post = await this.getPost(id);
        return post;
    }

    async deletePost(id: string): Promise<boolean> {
        const deleted = await this.postModel.deleteOne({ _id: id });
        return deleted;
    }
}
