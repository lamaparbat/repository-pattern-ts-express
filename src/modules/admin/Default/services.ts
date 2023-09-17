import { ResponseDTO } from "../../../shared/dtos/response.dto";
import { GenericRepository } from "../../../shared/repositories/generic.repository";
import { Admin, UserLoginPayload } from "../../../shared/types";
import { AdminModel } from "./model";
import DefaultRepository from "./repository";

const login = async (payload: UserLoginPayload) => {
  const repository: GenericRepository<Admin> = new DefaultRepository(AdminModel);

  return await repository.findOne(payload);
}


export default {
  login
}