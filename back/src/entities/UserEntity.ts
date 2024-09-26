import { Column, CreateDateColumn, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm"
import { Credential } from "./CredentialEntity"

 @Entity("users")
 export class User {
    @PrimaryGeneratedColumn()
    id: number

    @Column({type: "varchar", length:100, nullable: false})
    name: string

    @Column({type: "varchar", length:100, nullable: false, unique: true})
    email: string

    @Column({type: "date", nullable: false})
    birthdate: Date

    @Column({type: "int", nullable: false})
    phone: number

    @OneToOne( () => Credential, { cascade: true} )
    @JoinColumn()
    credentials: Credential

    @CreateDateColumn()
    createdAt?:Date

    @UpdateDateColumn()
    updatedAt?: Date

 }

