import { IUserLoginParams } from "../types";


class UserService {
    userRepository: any;

    constructor({ userRepository }: any){
        this.userRepository = userRepository;
    }

    async login(params: IUserLoginParams) {
        try {            
            const res = this.userRepository.findOne(params);
            return { data: [], error: null };

        } catch (error) {
            return { data: null, error: error };
        }
    }
}


export default UserService;