require("express-async-errors")

const express = require("express") 
const routes = require("./routes")
const AppError = require("./ultils/AppError")
const migrationRun = require("./database/sqlite/migration")
const app = express()

app.use(express.json())

app.use(routes)

migrationRun()

app.use((error, request,response,next) => {
    if(error instanceof AppError){
        return response.status(error.statusCode).json({
            status: "error",
            message: error.message
        })
    }

    response.status(500).json({
        status: "error",
        message: "internal server error"
    })
})

const PORT = 3333

app.listen(PORT, ()=> console.log(`Server is running on port ${PORT}`))