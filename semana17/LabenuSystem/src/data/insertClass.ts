import { connection } from "../connection";

export default async function insertClass(
    name: string,
    start_date: string,
    end_date: string,
    stage?: number
) {
    await connection.insert({
        name,
        start_date,
        end_date,
        stage
    }).into('labsystem_class')
}