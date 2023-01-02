import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { Category } from "./categories.entities";
import { Propertie } from "./properties.entities";
import { User } from "./user.entities";


@Entity("schedules_user_properties")
export class schedule_user_propertie {
    @PrimaryGeneratedColumn("uuid")
    id: string;
     
    @Column({type: 'date'})
    date: string;

    @Column({type: 'time'})
    hour: string;

    @ManyToOne(() => Propertie, Propertie => Propertie.schedule, {nullable: false})
    property: Propertie

    @ManyToOne(() => User, { nullable: false })
    user: User
}
