import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { Post } from '../../post/entities/post.entity';
import { faker } from '@faker-js/faker';

@Injectable()
export class PostSeeder {
  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {}

  async seed() {
    const numberOfPosts = 10;

    const postRepository = this.dataSource.getRepository(Post);
    await postRepository.clear();

    for (let i = 0; i < numberOfPosts; i++) {
      const dbPost = postRepository.create({
        title: faker.lorem.sentence(),
        description: faker.lorem.paragraphs(3),
        isPublished: faker.datatype.boolean(),
      });
      await postRepository.save(dbPost);
    }

    console.log('Seed des posts terminé.');
  }
}
