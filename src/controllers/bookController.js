import { getBooksById } from "../../db.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

export async function getBookId(req, res) {
  const { bookId } = req.params;

  const book = await getBooksById(bookId);

  if (!book) {
    throw new CustomNotFoundError("Book not found");
  }

  res.send(`Book name ${book.title}`);
}
