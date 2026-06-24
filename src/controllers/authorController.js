import { getAuthorById } from "../../db.js";

export async function getAuthorId(req, res) {
  const { authorId } = req.params;

  try {
    const author = await getAuthorById(authorId);

    if (!author) {
      return res.status(404).send("Author not found");
    }

    res.send(`Author name: ${author.name}`);
  } catch (error) {
    console.error("Error retrieving author:", error);
    res.status(500).send("Internal Server Error");
  }
}
