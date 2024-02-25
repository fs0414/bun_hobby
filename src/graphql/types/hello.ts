import { queryType } from "nexus";

export const Hello = queryType({
    definition(t) {
      t.nonNull.string('hello', {
        resolve: () => 'Hello world!',
      });
    },
  });