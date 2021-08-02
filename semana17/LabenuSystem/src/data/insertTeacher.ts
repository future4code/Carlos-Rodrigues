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
        birth_date
    }).into('labsystem_teachers')

    await connection.insert({
        class_id,
        expertise
    }).into('labsystem_expertise')
}