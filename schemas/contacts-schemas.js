import Joi from "joi";

export const contactsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
  favorite: Joi.boolean(),
}).messages({
  "string.base": "{#key} must be a string",
  "string.empty": "{#key} cannot be an empty field",
  "any.required": "missing required {#key} field",
});

export const updateFavoriteSchema = Joi.object({
  favorite: Joi.boolean().required(),
}).messages({
  "boolean.base": "{#key} must be a boolean",
  "any.required": "missing required {#key} field",
});
