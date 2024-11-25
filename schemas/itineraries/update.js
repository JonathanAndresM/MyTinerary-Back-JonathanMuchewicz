import Joi from "joi";

const itinerarySchema = Joi.object({
    title: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(3).max(50).required().messages({
        "string.base": "Title must be a string.",
        "string.pattern.base": "Title can only contain letters and spaces.",
        "string.min": "Title must be at least 3 characters long.",
        "string.max": "Title must not exceed 50 characters.",
    }),
    photo: Joi.string().uri().required().messages({
        "string.base": "Photo must be a string.",
        "string.uri": "Photo must be a valid URL.",
    }),
    author: Joi.string().pattern(/^[a-zA-ZñÑáéíóúÁÉÍÓÚ\s]+$/).min(3).max(50).required().messages({
        "string.base": "Author must be a string.",
        "string.pattern.base": "Author can only contain letters and spaces.",
        "string.min": "Author must be at least 3 characters long.",
        "string.max": "Author must not exceed 50 characters.",
    }),
    authorPhoto: Joi.string().uri().required().messages({
        "string.base": "Author photo must be a string.",
        "string.uri": "Author photo must be a valid URL.",
    }),
    duration: Joi.number().integer().positive().required().messages({
        "number.base": "Duration must be a number.",
        "number.integer": "Duration must be an integer.",
        "number.positive": "Duration must be a positive number.",
    }),
    like: Joi.number().integer().min(0).default(0).messages({
        "number.base": "Likes must be a number.",
        "number.integer": "Likes must be an integer.",
        "number.min": "Likes cannot be negative.",
    }),
    price: Joi.number().integer().positive().required().messages({
        "number.base": "Price must be a number.",
        "number.integer": "Price must be an integer.",
        "number.positive": "Price must be a positive number.",
    }),
    hashtags: Joi.array().items(Joi.string().pattern(/^[a-zA-Z0-9#]+$/).min(1).max(20)).messages({
        "array.base": "Hashtags must be an array.",
        "array.includes": "Each hashtag must be a string.",
        "string.pattern.base": "Hashtags can only include letters, numbers, and the # symbol.",
        "string.min": "Each hashtag must have at least 1 character.",
        "string.max": "Each hashtag must not exceed 20 characters.",
    }),
    city: Joi.string().pattern(/^[0-9a-fA-F]{24}$/).required().messages({
        "string.base": "City must be a string.",
        "string.pattern.base": "City must be a valid ObjectId.",
    }),
});

export default itinerarySchema;