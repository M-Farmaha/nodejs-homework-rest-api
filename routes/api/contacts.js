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

const router = express.Router();

router.get("/", contactsControllers.getAll);

router.get("/:contactId", isValidId, contactsControllers.getById);

router.post(
  "/",
  isEmptyBody,
  validateBody(contactsSchema),
  contactsControllers.add
);

router.put(
  "/:contactId",
  isValidId,
  isEmptyBody,
  validateBody(contactsSchema),
  contactsControllers.updateById
);

router.patch(
  "/:contactId/favorite",
  isValidId,
  isEmptyBodyWhenUpdateFavorite,
  validateBody(updateFavoriteSchema),
  contactsControllers.updateStatusContact
);

router.delete("/:contactId", isValidId, contactsControllers.deleteById);

export default router;
