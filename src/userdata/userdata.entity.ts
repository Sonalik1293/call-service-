import { PrimaryGeneratedColumn, BaseEntity, Column, Entity, ManyToOne, JoinColumn } from 'typeorm';

@Entity()
export class Userdata extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    
    @Column()
    Department_Name: string;


}