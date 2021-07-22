import app from "./app";
import connection from './connection'
import {Request, Response} from 'express'


app.get('/', async(req: Request, res: Response) => {
    try {
        const result =  await connection.raw (`
                SELECT * FROM Actor
            `)
        res.status(200).send(result)
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get('/:name', async(req: Request, res: Response) => {
    try {
        const name = req.params.name
        const result =  await connection.raw (`
                SELECT * FROM Actor
                WHERE name LIKE "%${name}%"
            `)
        res.status(200).send(result[0])
    } catch (error) {
        res.status(500).send(error.sqlMessage || error.message)
    }
})

app.get("/actor/:gender", async (req: Request, res: Response) => {
    try {
        const gender = req.params.gender
        const result = await connection.raw(`
            SELECT COUNT (*) as ${gender} FROM Actor
            WHERE gender = "${gender}"
        `)
        res.status(200).send(result[0])
    } catch (error) {
          console.log(error.message)
      res.status(500).send("Unexpected error")
    }
}) 

app.put('/actor/:id', async (req, res) => {
    try {
        await connection("Actor")
        .update({
            salary: req.body.salary
        })
        .where({id: req.params.id})
        res.send("Sucesso!")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.delete('/actor/:id', async (req, res) => {
    try {
        await connection("Actor")
        .delete ()
        .where({id: req.params.id})

        res.send("Sucesso!")
    } catch (error) {
        res.status(500).send(error.message)
    }
})

app.get('/salary/:gender', async (req, res) => {
    try {
    const result = await connection("Actor")
        .avg(`salary as average salary between ${req.params.gender}`)
        .where({gender: req.params.gender})
        res.send(result[0])
    }  catch (error) {
        res.status(500).send(error.message)
    }
})

const getActorById = async (id: string): Promise<any> => {
    const result = await connection.raw(`
      SELECT * FROM Actor WHERE id = '${id}'
    `)
  
    return result[0]
}

app.get('/actorbyid/:id', async (req, res) => {
    try {
        const id = req.params.id
        const actor = await getActorById(id)

        res.status(200).send(actor)
    } catch (error) {
        res.status(400).send({message: error.message})
    }
})