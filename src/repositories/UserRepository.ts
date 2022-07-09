
import { AppDataSource } from "../database/dataSource"
import { User } from "../database/entities/User"

export const UserRepository = () => {
    return AppDataSource.getRepository(User);
}