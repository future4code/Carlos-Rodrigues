import { Request, Response } from "express"
import { countries } from "../data"
import { country } from "../types"

export const getAllCountries = (
    req: Request,
    res: Response
): void => {
    res.send(countries.map((country: country) => {
        return {id: country.id, name: country.name}
    }))
}