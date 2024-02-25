// import { describe, it, expect, jest, mock, spyOn } from "bun:test"
import jest from "jest";
import { extendType, intArg, makeSchema, nonNull } from "nexus";
import { graphql } from "graphql";
import { Board} from "../../graphql/types/board";
import { GetBoardQuery } from "../../graphql";
import { BoardUseCaseFactory } from "../../graphql/factory/boardFactory";

describe("GetBoardQuery", () => {
    it("should find a board and return it", async() => {
       expect(true).toBe(true)
    })
});