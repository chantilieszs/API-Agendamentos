import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { Propertie } from "./properties.entities";


@Entity("categories")
export class Category {
    @PrimaryGeneratedColumn("uuid")
    id: string;

    @Column({unique: true})
    name: string;

    @OneToMany(() => Propertie, propertie => propertie.category)
    properties: Propertie[]
}