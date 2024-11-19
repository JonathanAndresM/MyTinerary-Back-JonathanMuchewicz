import Joi from "joi";

const schemaUpdate = Joi.object({
    name: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).min(4).max(15).required().messages({
        "string.base": "You can only use letters.",
        "string.pattern.base": "Special characters are not allowed.",
        "string.min": "Must be a minimum of 4 characters.",
        "string.max": "Must be a maximum of 15 characters.",
    }),

    lastName: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/).min(4).max(15).required().messages({
        "string.base": "You can only use letters.",
        "string.pattern.base": "Special characters are not allowed.",
        "string.min": "Must be a minimum of 4 characters.",
        "string.max": "Must be a maximum of 15 characters.",
    }),

    photo: Joi.string().uri().required().messages({
        "string.uri": "The photo URL is invalid.",
    }),

    country: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(15).required().messages({
        "string.base": "You can only use letters.",
        "string.pattern.base": "Special characters are not allowed.",
        "string.min": "Must be a minimum of 4 characters.",
        "string.max": "Must be a maximum of 15 characters.",
    })
})

export default schemaUpdate