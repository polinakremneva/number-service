import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class NumberEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ unique: true })
  value: number;

  @CreateDateColumn()
  createdAt: Date;
}
