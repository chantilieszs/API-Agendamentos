import "reflect-metadata"
import express from "express"
import { errorHandler } from "./errors/handleError"
import "express-async-errors"
import userRouter from "./routes/user.routes"
import loginRouter from "./routes/login.route"
import categoriesRouter from "./routes/category.routes"
import propertiesRouter from "./routes/properties.routes"
import schedulesRouter from "./routes/schedules.routes"

const app = express()
app.use(express.json())

app.use("/users", userRouter)
app.use("/login", loginRouter)
app.use("/categories", categoriesRouter)
app.use("/properties", propertiesRouter)
app.use("/schedules", schedulesRouter)

app.use(errorHandler)


export default app