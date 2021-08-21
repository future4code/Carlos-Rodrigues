import { User } from "../classes/user";
import connection from "../connection";

export class UserDatabase {
    private connection: any

    constructor() {
        this.connection = connection('labecom_users ')
    }
    public async create(user: User) {
        await this.connection
            .insert(user)
    }

    public async getAll() {
        const usersDB = await this.connection
            .select("name")
        const users = usersDB.map((user: any) => 
            new User(user.id, user.name, user.email, user.age)
        )
            
        return users
    }

}