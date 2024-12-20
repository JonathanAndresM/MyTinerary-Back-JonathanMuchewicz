import User from "../models/User.js";

export default async (req, res, next) => {
    try {
        let account = await User.findOne({ email: req.body.email })
        if (account) {
            req.user = {
                email: account.email,
                password: account.password,
                name: account.name,
                lastName: account.lastName,
                photo: account.photo,
                country: account.country
            }
            return next()
        }
        return res.status(400).json({
            success: false,
            messages: "User does not exits"
        })
    } catch (error) {
        next(error)
    }
}