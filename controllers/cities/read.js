//import handle_response from "../../middlewares/handle_response.js";
import City from "../../models/City.js";
import findDocument from "../findDocument.js";
import handleResponse from "../handleResponse.js"

let allCities = async (req, res, next) => {
    return await findDocument(City, {}, res, next)
}

let cityById = async (req, res, next) => {
    try {
        let id = req.params._id
        let all = await City.findById(id)
        return handleResponse(res, all, 200)
        //handle_response(res, all, 200)
    } catch (error) {
        next(error)
    }

}

export { allCities, cityById }