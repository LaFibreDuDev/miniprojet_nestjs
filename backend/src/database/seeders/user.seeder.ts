import { DataSource } from 'typeorm';
import { Inject, Injectable } from '@nestjs/common';
import { faker } from '@faker-js/faker';
import { User } from '../../user/entities/user.entity';
import * as bcrypt from 'bcryptjs';

@Injectable()
export class UserSeeder {
  constructor(@Inject('DATA_SOURCE') private readonly dataSource: DataSource) {}

  async seed() {
    const numberOfUsers = 5;

    const userRepository = this.dataSource.getRepository(User);
    await userRepository.clear();

    for (let i = 0; i < numberOfUsers; i++) {
      const dbUser = userRepository.create({
        username: faker.internet.username(),
        password: await bcrypt.hash('secret', 10),
        isActive: faker.datatype.boolean(),
      });
      await userRepository.save(dbUser);
    }

    console.log('Seed des users terminé.');
  }
}
