import BaseDataBase from "./BaseDataBase";
import { TABLE_USERS } from "./tableNames";

export class UserDatabase extends BaseDataBase {
    public async getAllUsers(){
        const result = await this.connection(TABLE_USERS).select()
        return result
    }
    public async createUser(){}
    public async getUserById(){}

}