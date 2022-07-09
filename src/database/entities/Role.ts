import { Column, Entity, JoinColumn, JoinTable, ManyToMany } from "typeorm";
import { EntityBase } from "../../domains/EntityBase";
import { Permission } from "./Permission";

@Entity("roles")
export class Role extends EntityBase{

    @Column()
    name: string;

    @Column()
    description: string;

    @ManyToMany(() => Permission)
    @JoinTable({
        name: "permissions_roles",
        joinColumns: [{ name: "role_id" }],
        inverseJoinColumns: [{ name: "permission_id" }],
    })
    permissions: Permission[];
}