import app from "./app";
import connection from './connection'

app.get('/', async(req, res) => {

    try {
        const result =  await connection.raw (
            `
                SELECT * FROM Actor
            `
        )

        res.send(result)
    } catch (error) {
        console.log(error.message)
        res.status(500)
    }
})