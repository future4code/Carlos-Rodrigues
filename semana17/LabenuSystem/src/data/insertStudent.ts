import { connection } from "../connection";

export default async function insertStudent(
    id: number,
    name: string,
    email: string,
    birth_date: string,
    class_id: number,
    hobbies: string[]
) {
    await connection.insert({
        id,
        name,
        email,
        birth_date,
        class_id
    }).into('labsystem_students')

    for (let hobbie of hobbies) {
        await connection.insert({
            hobbie
        }).into('labsystem_hobbies')
    }
}