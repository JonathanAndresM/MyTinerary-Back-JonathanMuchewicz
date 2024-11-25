import Joi from "joi";

const citySchema = Joi.object({
    city: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(15).required().messages({
        "string.base": "City must be a string.",
        "string.pattern.base": "City can only contain letters and spaces.",
        "string.min": "City must be at least 4 characters.",
        "string.max": "City must not exceed 15 characters.",
        "any.required": "City is required.",
    }),
    country: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(15).required().messages({
        "string.base": "Country must be a string.",
        "string.pattern.base": "Country can only contain letters and spaces.",
        "string.min": "Country must be at least 4 characters.",
        "string.max": "Country must not exceed 15 characters.",
        "any.required": "Country is required.",
    }),
    continent: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(4).max(15).required().messages({
        "string.base": "Continent must be a string.",
        "string.pattern.base": "Continent can only contain letters and spaces.",
        "string.min": "Continent must be at least 4 characters.",
        "string.max": "Continent must not exceed 15 characters.",
        "any.required": "Continent is required.",
    }),
    description: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(15).max(100).required().messages({
        "string.base": "Description must be a string.",
        "string.pattern.base": "Description can only contain letters and spaces.",
        "string.min": "Description must be at least 15 characters.",
        "string.max": "Description must not exceed 100 characters.",
        "any.required": "Description is required.",
    }),
    currency: Joi.string().required().messages({
        "string.base": "Currency must be a string.",
        "any.required": "Currency is required.",
    }),
    image: Joi.string().uri().required().messages({
        "string.base": "Image URL must be a string.",
        "string.uri": "Image must be a valid URL.",
        "any.required": "Image is required.",
    }),
    lenguage: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).required().messages({
        "string.base": "Language must be a string.",
        "string.pattern.base": "Language can only contain letters and spaces.",
        "any.required": "Language is required.",
    }),
    timeZone: Joi.string().pattern(/^[UTCutc0-9+-]+$/).required().messages({
        "string.base": "Time zone must be a string.",
        "string.pattern.base": "Currency can only contain the letters 'UTC', numbers (0-9), and symbols '+' or '-'.",
        "any.required": "Time zone is required.",
    }),
    airport: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).required().messages({
        "string.base": "Airport must be a string.",
        "string.pattern.base": "Airport can only contain letters and spaces.",
        "any.required": "Airport is required.",
    }),
    publicTransport: Joi.array().items(Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/)).required().messages({
        "array.base": "Public transport must be an array.",
        "array.includes": "Each public transport item must be a valid string.",
        "any.required": "Public transport is required.",
    }),
    localFestival: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).required().messages({
        "string.base": "Local festival must be a string.",
        "string.pattern.base": "Local festival can only contain letters and spaces.",
        "any.required": "Local festival is required.",
    }),
    famousFood: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).required().messages({
        "string.base": "Famous food must be a string.",
        "string.pattern.base": "Famous food can only contain letters and spaces.",
        "any.required": "Famous food is required.",
    }),
});

export default citySchema;

