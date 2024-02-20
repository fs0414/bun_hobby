import express, { 
  type Application, 
  type Request, 
  type Response, 
  type ErrorRequestHandler, 
  type NextFunction 
} from "express";
import cors from "cors";

export const app: Application = express();
const port = 8000;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

app.use("", require("./adapter/api/index"));

app.get("/", (_req: Request, res: Response) => {
  res.send("Hello World!");
});

app.use((
  err: ErrorRequestHandler,
  req: Request,
  res: Response,
  next: NextFunction
) => {
  console.error(err.name);
  res.status(500).json(err.name);
})

app.listen(port, () => {
  console.log(`Listening on port ${port}...`);
});