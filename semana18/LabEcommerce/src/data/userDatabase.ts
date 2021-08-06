import { User } from "../classes/user";
import connection from "../connection";

export class UserDatabase {
    private connection: any
    
    constructor() {
        this.connection = connection
    }
    public async create(user: User) {
        await connection('labecom_users ')
            .insert({user})
    }

    public async getAll() {
        
    }
}