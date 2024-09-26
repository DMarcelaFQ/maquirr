import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";


@Entity("credentials")
export class Credential{

    @PrimaryGeneratedColumn()
    id: number

    @Column({ type:"varchar", length: 255, unique: true, nullable: false})
    email: string

    @Column({ type:"varchar", length: 255, nullable: false})
    password: string  
    
    @CreateDateColumn()
    createdAt?:Date

    @UpdateDateColumn()
    updatedAt?:Date
}