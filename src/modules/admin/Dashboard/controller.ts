import { NextFunction, Request, Response } from "express";

const getAdminLists = (req: Request, res: Response, next: NextFunction) => {
  console.log("helklo world !!!!")

  return res.status(200).send("hjacker")
}



export {
  getAdminLists
}