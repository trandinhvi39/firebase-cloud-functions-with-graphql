import BaseDatasource from "./base";

export default class AuthorDS extends BaseDatasource {
  constructor(database) {
    super(database);
    this.authorsRef = this.database.firestore().collection("authors");
  }

  async createAuthor({ firstName, lastName }) {
    const authorId = this.authorsRef.doc().id;
    await this.authorsRef.doc().set({ firstName, lastName });
    return { id: authorId, firstName, lastName };
  }

  async author(id) {
    const authorQuery = await this.authorsRef.doc(id).get();
    const author = authorQuery.data();
    author.id = id;
    return author;
  }

  async deleteAuthor(id) {
    await this.authorsRef.doc(id).delete();
    return true;
  }

  async authors() {
    const authors = [];
    await this.authorsRef.get().then(snapshot => {
      snapshot.forEach(doc => {
        const author = doc.data();
        author.id = doc.id;
        authors.push(author);
      });
    });
    return authors;
  }
}
