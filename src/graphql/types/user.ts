import { enumType, objectType } from "nexus";
import { Board } from "./board";

export const User = objectType({
    name: "User",
    definition(t) {
        t.nonNull.int("id");
        t.nonNull.string("name");
        t.nonNull.string("email");
        t.nonNull.string("password");
        t.nonNull.field("role", { type: "Role" });
        t.list.field("boards", { type: Board });
    },
});

export const Role = enumType({
    name: "Role",
    members: ["USER", "ADMIN"],
});

export const AuthPayload = objectType({
    name: "AuthPayload",
    definition(t) {
        t.nonNull.string("token");
    },
});