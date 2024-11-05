import {Schema,model} from "mongoose"

const collection = "itineraries"
let schema = new Schema({
    title: {type: String, required: true},
    photo: {type: String, required: true},
    author: {type: String, required: true},
    authorPhoto: {type: String, required: true},
    duration: {type: Number, required: true},
    like: {type: Number, default: 0},
    price: {type: Number, required: true},
    hashtags: [{type: String}],
    city: {type: Schema.Types.ObjectId, ref: "cities", required: true},
},{
    timestamps: true
})

const Itinerary = model(collection,schema)

export default Itinerary
