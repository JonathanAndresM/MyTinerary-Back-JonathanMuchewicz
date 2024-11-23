import User from "../../models/User.js";
import handleResponse from "../handleResponse.js";

let signUp = async (req, res, next) => {
    try {
        let user = req.body
        user.online = false
        let all = await User.create(user)
        handleResponse(res, all, 201)
    } catch (error) {
        next(error)
    }
}

export default signUp