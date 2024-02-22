import express, { 
  type Application, 
  type Request, 
  type Response, 
  type ErrorRequestHandler, 
  type NextFunction 
} from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";

export const app: Application = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
)

app.use("", require("./adapter/api/index"));

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});
app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});
