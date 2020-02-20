export default {
  Query: {
    authors: async (_, __, { authorDS }) => authorDS.authors(),
    author: async (_, args, { authorDS }) => authorDS.author(args.id)
  },

  Mutation: {
    createAuthor: async (_, args, { authorDS }) => authorDS.createAuthor(args),
    deleteAuthor: async (_, args, { authorDS }) =>
      authorDS.deleteAuthor(args.id)
  }
};
