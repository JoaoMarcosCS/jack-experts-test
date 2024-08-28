import { Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity()
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'datetime' })
    createdAt: Date;
    
    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => User, { cascade: true })
    user: User;
}