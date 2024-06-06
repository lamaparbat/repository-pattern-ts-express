import { IUserLoginParams } from "../types";


class UserService {
    userRepository: any;

    constructor({ userRepository }: any){
        this.userRepository = userRepository;
    }

    async login(params: IUserLoginParams) {
        try {            
            const res = await this.userRepository.findOne(params);

            return { data: res, error: null };

        } catch (error) {
            return { data: null, error: error };
        }
    }
}


export default UserService;