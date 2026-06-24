const authors = [
  { id: 1, name: "Bryan" },
  { id: 2, name: "Christian" },
  { id: 3, name: "Jason" },
];

const books = [
  {
    id: 1,
    authorId: 1,
    title: "Nada Pode Me Parar",
    price: 50,
  },
  {
    id: 2,
    authorId: 2,
    title: "Harry Potter",
    price: 120,
  },
  {
    id: 3,
    authorId: 3,
    title: "Game of Thrones",
    price: 80,
  },
];

export async function getAuthorById(authorId) {
  return authors.find((author) => author.id === parseInt(authorId));
}

export async function getBooksById(bookId) {
  return books.find((book) => book.id === parseInt(bookId));
}
