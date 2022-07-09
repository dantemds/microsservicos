import { Column, Entity, JoinTable, ManyToMany } from "typeorm";
import { Permission } from "./Permission";
import { EntityBase } from "../../domains/EntityBase";
import { Role } from "./Role";

@Entity("users")
export class User extends EntityBase{

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @ManyToMany(() => Role)
    @JoinTable({
      name: "users_roles",
      joinColumns: [{ name: "user_id" }],
      inverseJoinColumns: [{ name: "role_id" }],
    })
    roles: Role[];

    @ManyToMany(() => Permission)
    @JoinTable({
        name: "users_permissions",
        joinColumns: [{name: "user_id"}],
        inverseJoinColumns: [{name: "permission_id"}],
    })
    permissions: Permission[];
    
    constructor(props: Omit<User,"id" | "permissions" | "roles" | "created_at">, id?: string, permissions?: Permission[], roles?: Role[] ){
      super();
      Object.assign(this, props);
    

    }

}