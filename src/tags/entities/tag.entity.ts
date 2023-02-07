import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
} from 'typeorm';
import { Article } from 'src/articles/entities/article.entity';

@Entity()
export class Tag {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @ManyToMany((type) => Article, (article) => article.tags)
  articles: Article[];

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @DeleteDateColumn()
  deleteTime: Date;
}
