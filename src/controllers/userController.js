import usersStorage from "../storages/usersStorage.js";
import { body, validationResult } from "express-validator";

const alphaError = "Must only contain letters.";
const lenghtError = "Must be between 1 and 20 characters";

const validateUser = [
  body("firstName")
    .trim()
    .isAlpha()
    .withMessage(`First name ${alphaError}`)
    .isLength({ min: 1, max: 20 })
    .withMessage(`First name: ${lenghtError}`),
  body("lastName")
    .trim()
    .isAlpha()
    .withMessage(`Last name ${alphaError}`)
    .isLength({ min: 1, max: 20 })
    .withMessage(`Last name: ${lenghtError}`),
];

function getUserById(id) {
  const getUserById = usersStorage.getUser(id);

  if (!getUserById) {
    return {
      status: 404,
      message: "User not found",
    };
  }

  return {
    status: 200,
    message: "User found",
  };
}

export function listUsers(req, res) {
  res.send(usersStorage.getUsers());
}

export const createUser = [
  validateUser,
  (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }

    const { firstName, lastName } = req.body;
    usersStorage.addUser({ firstName, lastName });

    res.send("User created");
  },
];

export const updateUser = [
  validateUser,
  (req, res) => {
    const error = validationResult(req);

    if (!error.isEmpty()) {
      return res.status(400).send(error.array());
    }

    const { firstName, lastName } = req.body;
    const { id } = req.params;

    const parsedId = parseInt(id);
    const response = getUserById(parsedId);

    if (response.status === 404) {
      return res.status(response.status).send("User not found");
    }

    try {
      usersStorage.updateUser(parsedId, { firstName, lastName });
      res.send(`User ${id} updated`);
    } catch (error) {
      res.send("Internal server error", error);
    }
  },
];

export function deleteUser(req, res) {
  const { id } = req.params;

  const parsedId = parseInt(id);
  const response = getUserById(parsedId);

  if (response.status === 404) {
    return res.status(response.status).send("User not found");
  }

  try {
    usersStorage.deleteUser(parsedId);
    res.send(`User deleted`);
  } catch (error) {
    res.send("Internal server error", error);
  }
}
