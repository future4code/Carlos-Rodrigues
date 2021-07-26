import connection from "../connection";

export default async function allUsers () {
    const result = await connection('to_do_list_users')
        .select('*')
    return result [0]
}