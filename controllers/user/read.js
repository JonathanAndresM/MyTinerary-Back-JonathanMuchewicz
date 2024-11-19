import User from "../../models/User.js";
import handleResponse from "../handleResponse.js";

export let allUser = async (req, res, next) => {
    try {
        let all = await User.find()
        handleResponse(res, all, 200)
    } catch (error) {
        next(error)
    }
}

export let userById = async (req, res, next) => {
    try {
        let id = req.params._id
        let all = await User.findById(id)
        handleResponse(res, all, 200)
    } catch (error) {
        next(error)
    }
}

