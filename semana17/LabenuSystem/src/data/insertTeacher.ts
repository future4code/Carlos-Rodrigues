import { connection } from "../connection";
import { EXPERTISE } from "../types/teacher";

export default async function insertTeacher(
    id: number,
    name: string,
    email: string,
    birth_date: string,
    class_id: number,
    expertise: EXPERTISE
) {
    await connection.insert({
        id,
        name,
        email,
        birth_date,
        class_id
    }).into('labsystem_teachers')

    await connection.insert({
        expertise
    }).into('labsystem_expertise')
}