
export interface GenericRepository <T> {
  count(criteria: any): Promise<number>
  find(criteria: any, options: any, paginationOptions: any): Promise<T[]>
  findOne(criteria: any): Promise<T>
  insertOne(item: T): Promise<T>
  insertMany(item: T[]): Promise<T[]>
  updateOne(criteria: any, options: any, data: Object): Promise<T>
  updateMany(criteria: any, options: any, data: Array<any>): Promise<T>
}