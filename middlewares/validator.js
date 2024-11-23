const validator = (schema) => [
    (req,res,next) =>{
        const validation = schema.validate(req.body, { abortEarly: false})
        if (validation.error) {
            const errors = validation.error.details.map((error) => ({
                field: error.context.key,
                message: error.message,
            }))
            return res.status(400).json({
                success: false,
                errors,
                //messages: validation.error.details.map((error) => error.message)
            })
        }
        return next()
    }
]

export default validator