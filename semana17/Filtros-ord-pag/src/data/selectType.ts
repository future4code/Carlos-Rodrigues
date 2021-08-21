import { connection } from "./connection"

export default async function selectType(type: string, name: any) {
    const user = await connection.raw(`
    SELECT id, name, email, type
    FROM aula49_exercicio
    WHERE type LIKE '%${type}%' AND name LIKE '%${name}%'
 `)

 return user[0]
}