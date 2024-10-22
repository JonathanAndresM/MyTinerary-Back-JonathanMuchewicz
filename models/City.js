import { Schema, model } from "mongoose";

let collection = "cities"
let schema = new Schema({
    city: { type: String, required: true },
    country: { type: String, required: true },
    continent: { type: String, required: true },
    description: { type: String, required: true },
    currency: { type: String, required: true },
    image: { type: String, required: true },
    lenguage: { type: String, required: true },
    timeZone: { type: String, required: true },
    airport: { type: String, required: true },
    publicTransport: { type: Array, required: true },
    localFestival: { type: String, required: true },
    famousFood: { type: String, required: true },
}, {
    timestamps: true
})

let City = model(collection, schema)

export default City