import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
  ManyToMany,
  JoinTable,
} from 'typeorm';
import { Tag } from 'src/tags/entities/tag.entity';

@Entity()
export class Article {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  thumb: string;

  @Column()
  type: number;

  @Column()
  count: number;

  @ManyToMany((type) => Tag, (tag) => tag.articles)
  @JoinTable()
  tags: Tag[];

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @DeleteDateColumn()
  deleteTime: Date;
}
