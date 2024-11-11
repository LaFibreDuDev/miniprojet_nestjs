import { ApiProperty } from '@nestjs/swagger';
import { IsNotEmpty, IsString } from 'class-validator';

export class SigninDto {
  @ApiProperty({ example: 'username', description: 'Le pseudo' })
  @IsString()
  @IsNotEmpty()
  username: string;

  @ApiProperty({
    example: 'secret',
    description: 'Le mot de passe',
  })
  @IsString()
  @IsNotEmpty()
  password: string;
}
