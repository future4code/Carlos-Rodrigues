import connection from "../connection";

export default async function alterUser (
    id: string,
    name?: string,
    nickname?: string,
    email?: string
) {
    if (name) {
        await connection('to_do_list_users')
        .update({ name })
        .where({ id })
    } if (nickname) {
        await connection('to_do_list_users')
        .update({ nickname })
        .where({ id })
    } if (email) {
        await connection('to_do_list_users')
        .update({ email })
        .where({ id })
    }
}