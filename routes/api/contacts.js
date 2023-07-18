import express from "express";

import contactsControllers from "../../controllers/contacts-controllers.js";
import contactsSchema from "../../schemas/contacts-schemas.js";
import validateBody from "../../decorators/validateBody.js";

const router = express.Router();

router.get("/", contactsControllers.getAll);

router.get("/:contactId", contactsControllers.getById);

router.post("/", validateBody(contactsSchema), contactsControllers.add);

router.delete("/:contactId", contactsControllers.deleteById);

router.put(
  "/:contactId",
  validateBody(contactsSchema),
  contactsControllers.updateById
);

export default router;
