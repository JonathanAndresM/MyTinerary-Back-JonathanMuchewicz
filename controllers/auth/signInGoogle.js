import User from "../../models/User.js";

const uri_front = "https://itinerary-ec8d7.web.app/home"

export default async (req,res,next) =>{
    try {
        await User.findOneAndUpdate(
            {email: req.user.email},
            {online: true}
        )
        return res.redirect(uri_front+"/?token="+req.token)
    } catch (error) {
        next(error)
    }
}