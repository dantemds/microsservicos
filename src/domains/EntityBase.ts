import { Column, CreateDateColumn, Entity, PrimaryColumn,PrimaryGeneratedColumn } from "typeorm";
import { uuid } from "uuidv4";

export class EntityBase{

    @PrimaryGeneratedColumn()
    public readonly id: string;

    @CreateDateColumn()
    public created_at: Date

    constructor(){
        if(!this.id){
            this.id = uuid();
        }
    }
}