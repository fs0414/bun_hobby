import { graphqlHTTP } from "express-graphql";
import { schema } from "../schema";
export const graphiqlRouter = graphqlHTTP({
    schema: schema,
    graphiql: true,
});