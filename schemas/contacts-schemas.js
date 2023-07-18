import Joi from "joi";

const contactsSchema = Joi.object({
  name: Joi.string().required(),
  email: Joi.string().required(),
  phone: Joi.string().required(),
}).messages({
  "string.base": "{#key} must be a string",
  "string.empty": "{#key} cannot be an empty field",
  "any.required": "missing required {#key} field",
});

export default contactsSchema;
