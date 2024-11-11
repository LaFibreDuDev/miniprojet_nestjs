import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostModule } from './post/post.module';
import { APP_FILTER } from '@nestjs/core';
import { HttpExceptionFilter } from './http-exception.filter';
import { DatabaseModule } from './database/database.module';
import { PostSeeder } from './database/seeders/post.seeder';
import { AuthModule } from './auth/auth.module';
import { UserModule } from './user/user.module';
import { UserSeeder } from './database/seeders/user.seeder';

@Module({
  imports: [PostModule, DatabaseModule, AuthModule, UserModule],
  controllers: [AppController],
  providers: [
    {
      provide: APP_FILTER,
      useClass: HttpExceptionFilter,
    },
    AppService,
    PostSeeder,
    UserSeeder,
  ],
})
export class AppModule {}
