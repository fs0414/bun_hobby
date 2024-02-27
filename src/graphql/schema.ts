import { makeSchema } from 'nexus';
import * as types from "./index"

export const schema = makeSchema({
    types: types,
    outputs: {
        typegen: __dirname + '/nexus-typegen.ts',
        schema: __dirname + '/schema.graphql',
    },
})
