import { IUserLoginParams } from "../types";


class UserRepository {
    userDao: any;

    constructor({ userDao }: any) {
        this.userDao = userDao;

        this.findOne = this.findOne.bind(this);
    }

    async findOne(params: IUserLoginParams) {
        return await this.userDao.findOne(params);
    }

}

export default UserRepository;