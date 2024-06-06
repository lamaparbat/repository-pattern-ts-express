
class UserDao {
    userDb:any;

    constructor({ userDb }: any){
        this.userDb = userDb;

        this.findOne = this.findOne.bind(this);
    }

    async findOne(params: Object){
        return await this.userDb.findOne(params);
    }
}

export default UserDao;