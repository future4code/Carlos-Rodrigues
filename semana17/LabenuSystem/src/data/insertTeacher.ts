import { connection } from "../connection";

export default async function insertTeacher(
    id: number,
    name: string,
    email: string,
    birth_date: string,
) {
    await connection.insert({
        id,
        name,
        email,
        birth_date
    }).into('labsystem_teachers')
}