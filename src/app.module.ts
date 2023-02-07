import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './users/entities/user.entity';
import { Article } from './articles/entities/article.entity';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { ArticlesModule } from './articles/articles.module';
import { TagsModule } from './tags/tags.module';
import { Tag } from './tags/entities/tag.entity';
import { ProjectsModule } from './projects/projects.module';

import { Project } from './projects/entities/project.entity';
import { SpecialsModule } from './specials/specials.module';

import { Special } from './specials/entities/special.entity';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '',
      database: 'blog2',
      entities: [User, Article, Tag, Project, Special],
      synchronize: true,
    }),
    ArticlesModule,
    TagsModule,
    ProjectsModule,
    SpecialsModule,
    AuthModule,
    UsersModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
