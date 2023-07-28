import express from "express";

import authControllers from "../../controllers/auth-controllers.js";

import validateBody from "../../decorators/validateBody.js";
import {
  usersRegisterSchema,
  usersLoginSchema,
  updateUserSubscriptionSchema,
} from "../../schemas/users-schemas.js";
import authenticate from "../../middlewars/authenticate.js";

const authRouter = express.Router();

authRouter.post(
  "/register",
  validateBody(usersRegisterSchema),
  authControllers.register
);

authRouter.post(
  "/login",
  validateBody(usersLoginSchema),
  authControllers.login
);

authRouter.get("/current", authenticate, authControllers.getCurrent);

authRouter.post("/logout", authenticate, authControllers.logout);

authRouter.patch(
  "/subscription",
  authenticate,
  validateBody(updateUserSubscriptionSchema),
  authControllers.updateSubscription
);

export default authRouter;
