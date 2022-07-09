import { User } from "../../database/entities/User";
import {hash} from 'bcryptjs';
import { UserRepository } from "../../repositories/UserRepository";
import { ICreateUserRequestDTO } from "./CreateUserDTO";

export class CreateUserUseCase{ 
    constructor() {}

    async execute(data: ICreateUserRequestDTO){

        
        const userAlreadyExists = await UserRepository().findOne();
        
        if(userAlreadyExists){
            throw new Error('User Already exists.');
        }

        data.password = await hash(data.password, 8);

        const user = new User(data);

        await this.userRepository.save(user);

       
    }
}