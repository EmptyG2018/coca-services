import {
  Entity,
  Column,
  PrimaryGeneratedColumn,
  CreateDateColumn,
  UpdateDateColumn,
  DeleteDateColumn,
} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  nickName: string;

  @Column()
  headImg: string;

  @Column()
  email: string;

  @Column()
  password: string;

  @CreateDateColumn()
  createTime: Date;

  @UpdateDateColumn()
  updateTime: Date;

  @DeleteDateColumn()
  deleteTime: Date;
}
