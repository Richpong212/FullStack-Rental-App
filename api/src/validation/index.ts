import { validationResult } from "express-validator";
import { Response, NextFunction, Request } from "express";

export const validate = (req: Request, res: Response, next: NextFunction) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    const errorList = errors.array().map((error) => error.msg);
    return res.status(400).json({ errors: errorList });
  }
  next();
};
