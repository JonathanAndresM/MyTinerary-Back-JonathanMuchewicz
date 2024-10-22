import handle_response from "../middlewares/handle_response.js";
//import handleResponse from "./handleResponse.js"

const findDocument = async (Models, query, res, next) => {
    try {
        let all = await Models.find(query)
        handle_response(res, all, 200)
        //return handleResponse(res, all, 200)
    } catch (error) {
        next(error);
    }
}

export default findDocument