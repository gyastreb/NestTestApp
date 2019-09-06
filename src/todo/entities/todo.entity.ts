import {Entity, Column, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class TodoEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({length: 500})
    name: string;
}
