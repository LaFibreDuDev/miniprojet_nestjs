import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import { PostSeeder } from './seeders/post.seeder';
import { UserSeeder } from './seeders/user.seeder';

async function runSeeder() {
  const app = await NestFactory.createApplicationContext(AppModule);
  try {
    const postSeeder = app.get(PostSeeder);
    await postSeeder.seed();
    const userSeeder = app.get(UserSeeder);
    await userSeeder.seed();
  } catch (error) {
    console.error('Erreur lors du seeding :', error);
  } finally {
    await app.close();
    process.exit(0);
  }
}

runSeeder();
