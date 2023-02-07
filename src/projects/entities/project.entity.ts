import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Project {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  thumb: string;

  @Column()
  webUrl: string;

  @Column()
  gitUrl: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @DeleteDateColumn()
  deleteTime: Date;
}
