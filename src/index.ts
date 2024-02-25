import express, { 
  type Application, 
  type NextFunction, 
  type Request, 
  type Response,
} from "express";
import cors from "cors";
import { graphqlHTTP } from "express-graphql";
import { schema } from "./graphql/schema";

export const app: Application = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use("", require("./adapter/rest/index"));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,
    graphiql: true
  })
)


app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});

app.use((
  err: Error,
  _req: Request,
  res: Response,
  _next: NextFunction) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
  }
);