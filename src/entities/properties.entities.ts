import { Column, CreateDateColumn, Entity, JoinColumn, ManyToMany, ManyToOne, OneToMany, OneToOne, PrimaryGeneratedColumn, Unique, UpdateDateColumn } from "typeorm";
import { Address } from "./adresses.entities";
import { Category } from "./categories.entities";
import { schedule_user_propertie } from "./schedules_user_properties.entities";

@Entity("properties")
export class Propertie {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({default: false})
    sold: boolean;

    @Column({ type: "decimal", precision: 12, scale: 2})
    value: number;

    @Column()
    size: number;

    @CreateDateColumn()
    createdAt: Date;

    @UpdateDateColumn()
    updatedAt: Date;

    @OneToOne(() => Address, {eager: true, cascade: true, nullable: false }) @JoinColumn()
    address: Address

    @ManyToOne(() => Category, category => category.properties, {nullable: false})
    category: Category

    @OneToMany(() => schedule_user_propertie, schedule_user_propertie => schedule_user_propertie.property)
    schedule: schedule_user_propertie[]
}