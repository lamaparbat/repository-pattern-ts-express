import { GenericRepository } from "../../../shared/repositories/generic.repository";
import { Admin, UserLoginPayload } from "../../../shared/types";
import { AdminModel } from "./model";
import DefaultRepository from "./repository";

// const repository: GenericRepository<Admin> = new DefaultRepository(AdminModel);

export default class DefaultAdminServices {
    repository: GenericRepository<Admin>; 
    constructor(opts: any) {
      this.repository = opts.DefaultRepository;
    }

   public async login (payload: UserLoginPayload) {
    return await this.repository.findOne(payload);
  }

}