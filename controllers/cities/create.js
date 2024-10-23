import City from "../../models/City.js"
import handleResponse from "../handleResponse.js"

let create = async (req, res, next) => {
    try {
        let city = req.body
        let all = await City.create(city)
        handleResponse(res, all, 201)
    } catch (error) {
        next(error)
    }
}

let createMany = async (req, res, next) => {
    try {
        let city = req.body
        let all = await City.insertMany(city)
        handleResponse(res, all, 201)
    } catch (error) {
        next(error)
    }
}

export { create, createMany }