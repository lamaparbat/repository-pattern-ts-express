import { Admin, UserLoginPayload } from "../../../shared/types";
import { GenericRepository } from "../../../shared/repositories/generic.repository";

export default class DefaultAdminServices {
  private repository: GenericRepository<Admin>; 

  constructor(opts: any) {
    this.repository = opts.DefaultRepository;
  }

  async login (payload: UserLoginPayload) {
    console.log({payload})
    return await this.repository.findOne(payload);
  }

}