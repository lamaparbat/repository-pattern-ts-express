import { AdminModel } from "./model";
import { Admin } from "../../../shared/types/index";
import { GenericRepository } from "../../../shared/repositories/generic.repository";

class DefaultRepository implements GenericRepository<Admin>{
  dataSource: any;

  constructor() {
    this.dataSource = AdminModel;
  }

  async count(criteria: any) {
    return this.dataSource.count(criteria);
  }

  async find(criteria: any, options: any, paginationOptions: any) {
    return this.dataSource.find(criteria, options, paginationOptions);
  }

  async findOne(criteria: any) {
    console.log(criteria, 123)
    return this.dataSource.findOne(criteria);
  }
  async insertOne(item: Admin) {
    return this.dataSource.insertOne(item);
  }
  async insertMany(items: Admin[]) {
    return this.dataSource.insertMany(items);
  }
  async updateOne(item: Admin) {
    return this.dataSource.updateOne(item);
  }

  async updateMany(items: Admin[]) {
    return this.dataSource.updateMany(items);
  }
}

export default DefaultRepository;