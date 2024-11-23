import User from "../models/User.js";

export default async (req,res,next) => {
    try {
        const account = await User.findOne({email: req.body.email})
        if (account) {
            return res.status(400).json({
                success: false,
                errors: [
                    {
                        field: "email",
                        message: "This email is already registered.",
                    },
                ],
                //messages: "User already exits"
            })
        }
        next()
    } catch (error) {
        next(error)
    }
}