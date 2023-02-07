import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class Special {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  title: string;

  @Column()
  desc: string;

  @Column()
  thumb: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @DeleteDateColumn()
  deleteTime: Date;
}
