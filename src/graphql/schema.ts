import { makeSchema } from 'nexus';
import * as types from "./types/index"

export const schema = makeSchema({
types: types,
outputs: {
    typegen: __dirname + './nexus-typegen',
    schema: __dirname + './schema.graphql',
    },
})
