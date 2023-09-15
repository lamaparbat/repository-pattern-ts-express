import Joi from "joi";


export const GetAdminLists = Joi.object({
  skip: Joi.number().min(0).default(0).optional(),
  limit: Joi.number().positive().default(20).optional(),
  search: Joi.string().optional().allow("",null),
});