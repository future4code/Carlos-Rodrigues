import { Request, Response } from "express";
import Trip from "../classes/trip";
import { TripDatabase } from "../data/tripDatabase";

export default async function createTrip(
    req: Request,
    res: Response
) {
    let errorCode = 400
    try {
        const id = Math.floor(Date.now() + Math.random())
        const {trip, description, price} = req.body
        console.log(req.body)
        if (!trip || !description || !price) {
            throw new Error("Preencha todos os campos.")
        }

        const tripToAdd = new Trip(id, trip, description, price)
        const database = new TripDatabase()

        await database.create(tripToAdd)

        res.status(201).send("Viagem adicionada!")

    } catch (error) {
        res.status(errorCode).send({ message: error.message })
    }
}