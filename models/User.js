import { Schema, model } from "mongoose";

const collection = "users"
let schema = new Schema({
    name: { type: String, required: true },
    lastName: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String, required: true },
    photo: { type: String, required: true },
    country: { type: String, required: true },
    online: { type: Boolean }
}, {
    timestamps: true
})

const User = model(collection, schema)

export default User
