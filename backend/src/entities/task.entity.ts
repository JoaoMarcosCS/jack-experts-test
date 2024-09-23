import { BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity('task')
export class Task {

    @PrimaryGeneratedColumn()
    id: number;

    @CreateDateColumn({ type: 'timestamp' })
    createdAt: Date;
    
    @Column()
    title: string;

    @Column({ nullable: true })
    description: string;

    @ManyToOne(() => User, { onDelete: 'CASCADE' })
    user: User;

    @Column({default: "open"})
    status: string;

    @Column({default: false})
    isFavorite: boolean;

}