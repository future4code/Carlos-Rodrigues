import express, { Express, Request, Response } from "express";
import cors from 'cors'

export const app: Express = express()

app.use(express.json())
app.use(cors())

app.get("/ping", (req: Request, res: Response) => {
    res.status(200).send("pong!")
  })

app.listen(3003, () => {
    console.log("Server is running!")
})