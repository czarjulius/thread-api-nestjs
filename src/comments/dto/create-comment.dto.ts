import { IsString, IsNotEmpty } from 'class-validator';

export class CreateCommentDto {
  @IsNotEmpty()
  @IsString()
  text: string;

  likes: number;

  @IsNotEmpty()
  @IsString()
  userId: string;

  parentId: string | null;
}
