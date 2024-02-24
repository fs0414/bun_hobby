import { objectType } from "nexus";

export const Board = objectType({
    name: "Board",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("content");
        t.nonNull.int("user_id")
    },
})
