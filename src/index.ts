import express, { 
  type Application,
  type NextFunction,
  type Request, 
  type Response,
} from "express";
import cors from "cors";
import { graphiqlRouter } from "./graphql/adapter/router";
import { errorHandler } from "./applicatopn/handler/middleware/errorHandler";

export const app: Application = express();
const port = 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// routes
app.use("", require("./adapter/rest/index"));
app.use("/graphql", graphiqlRouter);

// error handler
app.use(errorHandler);

// server
app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});