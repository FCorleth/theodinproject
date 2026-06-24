import { getAuthorById } from "../../db.js";
import { CustomNotFoundError } from "../errors/CustomNotFoundError.js";

export async function getAuthorId(req, res) {
  const { authorId } = req.params;

  const author = await getAuthorById(authorId);

  if (!author) {
    throw new CustomNotFoundError("Author not found");
  }

  res.send(`Author name: ${author.name}`);
}
