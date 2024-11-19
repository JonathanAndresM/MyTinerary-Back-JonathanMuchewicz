import User from "../../models/User.js";

export default async (req,res,next) =>{
    try {
        await User.findOneAndUpdate(
            {email: req.body.email},
            {online: true}
        )
        return res.status(200).json({
            success: true,
            message: "Signed In",
            user: {
                name: req.user.name,
                lastName: req.user.lastName,
                email: req.user.email,
                photo: req.user.photo,
                country: req.user.country
            },
            token: req.token
        })
    } catch (error) {
        next(error)
    }
}