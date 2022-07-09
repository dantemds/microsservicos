import { Column, Entity } from "typeorm";
import { EntityBase } from "../../domains/EntityBase";

@Entity("permissions")
export class Permission extends EntityBase{

    @Column()
     name: string;

    @Column()
    description: string;

    
}