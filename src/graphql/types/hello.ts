import { queryType } from "nexus";

export const Hello = queryType({
    definition(t) {
      console.log('gql hello'),
      t.nonNull.string('hello', {
        resolve: () => 'Hello world!',
      });
    },
  });