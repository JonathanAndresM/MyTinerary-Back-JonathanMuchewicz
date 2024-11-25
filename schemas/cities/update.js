import Joi from "joi";

const citySchema = Joi.object({
    city: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(15).required().messages({
        "string.base": "City must be a string.",
        "string.pattern.base": "City can only contain letters and spaces.",
        "string.min": "City must be at least 4 characters.",
        "string.max": "City must not exceed 15 characters.",
    }),
    country: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(15).required().messages({
        "string.base": "Country must be a string.",
        "string.pattern.base": "Country can only contain letters and spaces.",
        "string.min": "Country must be at least 4 characters.",
        "string.max": "Country must not exceed 15 characters.",
    }),
    continent: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(15).required().messages({
        "string.base": "Continent must be a string.",
        "string.pattern.base": "Continent can only contain letters and spaces.",
        "string.min": "Continent must be at least 4 characters.",
        "string.max": "Continent must not exceed 15 characters.",
    }),
    description: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(15).max(100).required().messages({
        "string.base": "Description must be a string.",
        "string.pattern.base": "Description can only contain letters and spaces.",
        "string.min": "Description must be at least 15 characters.",
        "string.max": "Description must not exceed 100 characters.",
    }),
    currency: Joi.string().required().messages({
        "string.base": "Currency must be a string.",
    }),
    image: Joi.string().uri().required().messages({
        "string.base": "Image URL must be a string.",
        "string.uri": "Image must be a valid URL.",
    }),
    lenguage: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).required().messages({
        "string.base": "Language must be a string.",
        "string.pattern.base": "Language can only contain letters and spaces.",
    }),
    timeZone: Joi.string().pattern(/^[UTCutc0-9+-]+$/).required().messages({
        "string.base": "Time zone must be a string.",
        "string.pattern.base": "Currency can only contain the letters 'UTC', numbers (0-9), and symbols '+' or '-'.",
    }),
    airport: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).required().messages({
        "string.base": "Airport must be a string.",
        "string.pattern.base": "Airport can only contain letters and spaces.",
    }),
    publicTransport: Joi.array().items(Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)).required().messages({
        "array.base": "Public transport must be an array.",
        "array.includes": "Each public transport item must be a valid string.",
    }),
    localFestival: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).required().messages({
        "string.base": "Local festival must be a string.",
        "string.pattern.base": "Local festival can only contain letters and spaces.",
    }),
    famousFood: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).required().messages({
        "string.base": "Famous food must be a string.",
        "string.pattern.base": "Famous food can only contain letters and spaces.",
    }),
});

export default citySchema;