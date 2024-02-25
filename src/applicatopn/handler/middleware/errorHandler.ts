import type { Request, Response, NextFunction, ErrorRequestHandler } from "express"

export const errorHandler = (
    err: ErrorRequestHandler,
    _req: Request,
    res: Response,
    _next: NextFunction
  ) => {
      res.status(400).send(err)
  }