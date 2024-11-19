import Joi from "joi";

const schemaSignUp = Joi.object({
    name: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).min(4).max(15).required().messages({
        "string.base": "You can only use letters.",
        "string.pattern.base": "Special characters are not allowed.",
        "string.min": "Must be a minimum of 4 characters.",
        "string.max": "Must be a maximum of 15 characters.",
        "any.required": "The name field is required.",
    }),

    lastName: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).min(4).max(15).required().messages({
        "string.base": "You can only use letters.",
        "string.pattern.base": "Special characters are not allowed.",
        "string.min": "Must be a minimum of 4 characters.",
        "string.max": "Must be a maximum of 15 characters.",
        "any.required": "The last name field is required.",
    }),

    password: Joi.string().pattern(/^[a-zA-Z0-9ñÑáéíóúÁÉÍÓÚ]+$/).min(6).max(20).required().messages({
        "string.base": "You can only use letters and numbers.",
        "string..pattern.base": "Special characters are not allowed.",
        "string.min": "Must be a minimum of 6 characters.",
        "string.max": "Must be a maximum of 20 characters.",
        "any.required": "The password field is required.",
    }),

    photo: Joi.string().uri().required().messages({
        "string.uri": "The photo URL is invalid.",
        "any.required": "The photo field is required.",
    }),

    email: Joi.string().email({ minDomainSegments: 2, tlds: { allow: ["com", "net"] } }).required().messages({
        "string.email": "Incorrect email format.",
        "any.required": "The email field is required.",
    }),

    country: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(15).required().messages({
        "string.base": "You can only use letters.",
        "string.pattern.base": "Special characters are not allowed.",
        "string.min": "Must be a minimum of 4 characters.",
        "string.max": "Must be a maximum of 15 characters.",
        "any.required": "The country field is required.",
    })
})

export default schemaSignUp
