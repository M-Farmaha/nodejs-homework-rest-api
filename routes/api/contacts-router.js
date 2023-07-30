import express from "express";

import contactsControllers from "../../controllers/contacts-controllers.js";
import {
  contactsSchema,
  updateFavoriteSchema,
} from "../../schemas/contacts-schemas.js";
import validateBody from "../../decorators/validateBody.js";
import { isValidId } from "../../middlewars/isValidId.js";
import {
  isEmptyBody,
  isEmptyBodyWhenUpdateFavorite,
} from "../../middlewars/isEmptyBody.js";
import authenticate from "../../middlewars/authenticate.js";

const contactsRouter = express.Router();

contactsRouter.use(authenticate);

contactsRouter.get("/", contactsControllers.getAll);

contactsRouter.get("/:contactId", isValidId, contactsControllers.getById);

contactsRouter.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchema),
  contactsControllers.add
);

contactsRouter.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(contactsSchema),
  contactsControllers.updateById
);

contactsRouter.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBodyWhenUpdateFavorite,
  validateBody(updateFavoriteSchema),
  contactsControllers.updateStatusContact
);

contactsRouter.delete("/:contactId", isValidId, contactsControllers.deleteById);

export default contactsRouter;
