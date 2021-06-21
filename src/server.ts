import express from "express"
import cors from "cors"
import { router } from "./config/routes"
import { mongoose } from "./config/database"

const app = express()
const database = mongoose

// Middlewares
app.use(express.json())
app.use(cors())
app.use(router)

app.listen(3001, () => {
    console.log(`The server is working with ts-node-dev...`)
})