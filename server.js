import express from "express"
import "dotenv/config.js"
import "./config/db.js"
import cors from "cors"
import morgan from "morgan"
import indexRouter from "./router/index.js"
import not_found_handler from "./middlewares/not_found_handler.js"
import error_handler from "./middlewares/error_handler.js"

const server = express()
const PORT = process.env.PORT
const ready = () => console.log("Server corriendo en el puerto: "+PORT);

server.use(express.json())
server.use(express.urlencoded({extended: true}))
server.use(cors())
server.use(morgan("dev"))
server.use("/api",indexRouter)
server.use(not_found_handler)
server.use(error_handler)


server.listen(PORT, ready)