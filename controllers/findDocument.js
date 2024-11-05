import handle_response from "../middlewares/handle_response.js";
import "../models/City.js"

const findDocument = async (Models, req, res, next) => {
    try {
        let { city } = req.query
        console.log(city);

        let query = {}
        if (city) {
            query.city = { $regex: '^' + city, $options: 'i' }
        }
        let all = await Models.find(query).populate("city","").exec()
        handle_response(res, all, 200)
    } catch (error) {
        next(error);
    }
}

export default findDocument