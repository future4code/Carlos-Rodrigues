import connection from "../connection";

export default async function selectUser (id: string) {
    const result = await connection('to_do_list_users')
        .select('nickname')
        .where({ id })
    return result [0]
}