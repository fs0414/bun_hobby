import express, { 
  type Application,
  type Response,
} from "express";
import cors from "cors";
import { graphiqlRouter } from "./graphql/adapter/router";
import { errorHandler } from "./applicatopn/handler/middleware/errorHandler";
import { authenticateTokenUnless } from "./applicatopn/handler/middleware/authenticateToken";
import * as Batch from "./applicatopn/batch/index";
export const app: Application = express();
const port = 8000;

// middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
app.use(errorHandler);
// app.use(Batch)
Batch.payrollReportClaen();

// routes
app.use("", require("./adapter/rest/index"));
app.use("/graphql", authenticateTokenUnless, graphiqlRouter);

// apollo
// const apolloClient = new ApolloServer({
//   schema: schema
// })

// await apolloClient.start();
// apolloClient.applyMiddleware({ app });

// server
app.get("/", (_, res: Response) => {
  res.send("Hello World!");
});

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});