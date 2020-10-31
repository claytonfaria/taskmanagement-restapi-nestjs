import { ApiProperty } from '@nestjs/swagger';
import { User } from 'src/auth/user.entity';
import {
  BaseEntity,
  Column,
  Entity,
  ManyToOne,
  PrimaryGeneratedColumn,
} from 'typeorm';
import { TaskStatus } from './task-status.enum';

@Entity()
export class Task extends BaseEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @ApiProperty({ example: 'Task 1', description: 'The task title' })
  @Column()
  title: string;

  @ApiProperty({ example: 'This task is', description: 'The task description' })
  @Column()
  description: string;

  @Column()
  status: TaskStatus;

  @ManyToOne(() => User, (user) => user.tasks, { eager: false })
  user: User;

  @Column()
  userId: number;
}
