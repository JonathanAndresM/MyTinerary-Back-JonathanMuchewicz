import mongoose from "mongoose";

let url = process.env.URI_MONGO

async function connectDataBase() {
    try {
        await mongoose.connect(process.env.URI_MONGO)
        console.log("Data Base Connect");
        
    } catch (error) {
        console.log(error);
        
    }
}