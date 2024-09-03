import { BeforeUpdate, Column, CreateDateColumn, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";


enum Status {
    OPEN = 'open',
    COMPLETED = 'completed',
  }

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

    @Column({type: 'enum', enum: Status, default: Status.OPEN})
    status: Status;

    @Column({default: false})
    isFavorite: boolean;

    @Column({ type: 'datetime', nullable: true })
    completedAt: Date;

    //dependencia do valo do status
    @BeforeUpdate()
    updateCompletedAt() {
        if (this.status === 'completed') {
            this.completedAt = new Date();
        }
    }
}