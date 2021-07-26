import { connection } from "./connection"

export default async function selectType(type: string) {
    const user = await connection.raw(`
    SELECT id, name, email, type
    FROM aula49_exercicio
    WHERE type LIKE '%${type}%'
 `)

 return user[0]
}