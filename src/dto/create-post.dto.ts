import { IsString } from 'class-validator';

export class CreatePostDTO {

    @IsString()
    readonly title: string;

    @IsString()
    readonly description: string;
}