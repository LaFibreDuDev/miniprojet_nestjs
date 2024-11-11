import { Entity, Column, PrimaryGeneratedColumn } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity()
export class Post {
  @PrimaryGeneratedColumn()
  @ApiProperty({ description: 'Identifiant unique du post' })
  id: number;

  @Column({ length: 500 })
  @ApiProperty({ description: 'Titre du post' })
  title: string;

  @Column('text')
  @ApiProperty({ description: 'Contenu du post' })
  description: string;

  @Column('boolean')
  @ApiProperty({ description: 'Date de publication' })
  isPublished: boolean;
}
