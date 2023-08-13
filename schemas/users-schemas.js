import Joi from "joi";

export const usersRegisterSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
  subscription: Joi.string(),
}).messages({
  "string.base": "{#key} must be a string",
  "string.empty": "{#key} cannot be an empty field",
  "any.required": "missing required {#key} field",
});

export const usersEmailSchema = Joi.object({
  email: Joi.string().required(),
}).messages({
  "string.base": "{#key} must be a string",
  "string.empty": "{#key} cannot be an empty field",
  "any.required": "missing required field {#key}",
});

export const usersLoginSchema = Joi.object({
  password: Joi.string().required(),
  email: Joi.string().required(),
}).messages({
  "string.base": "{#key} must be a string",
  "string.empty": "{#key} cannot be an empty field",
  "any.required": "missing required {#key} field",
});

export const updateUserSubscriptionSchema = Joi.object({
  subscription: Joi.string().required(),
}).messages({
  "string.base": "{#key} must be a string",
  "any.required": "missing required {#key} field",
});
