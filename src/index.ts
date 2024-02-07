import express, { type Application, type Request, type Response } from "express";

export const app: Application = express();
const port = 8000;

app.use("", require("./adapter/api/index"));

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});