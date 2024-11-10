import { ApiProperty } from '@nestjs/swagger';
import { IsBoolean, IsNotEmpty, IsString } from 'class-validator';

export class CreatePostDto {
  @ApiProperty({ example: 'Exemple de titre', description: 'Le titre du post' })
  @IsString()
  @IsNotEmpty()
  name: string;

  @ApiProperty({
    example: 'Exemple de description',
    description: 'Le contenu du post',
  })
  @IsString()
  @IsNotEmpty()
  description: string;

  @ApiProperty({
    example: true,
    description: 'Le post est-il hors ligne ou en ligne ?',
  })
  @IsBoolean()
  isPublished?: boolean;
}
