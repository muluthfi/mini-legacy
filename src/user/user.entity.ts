import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    npwp: number;

    @Column()
    password: string;

    @Column()
    email: string;
}