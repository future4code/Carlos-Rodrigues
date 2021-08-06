export class User {
    private id: number
    private name: string
    private email: string
    private age: number

    constructor(
        id: number,
        name: string,
        email: string,
        age: number
    ) {
        this.id = id,
        this.name = name,
        this.email = email,
        this.age = age
    }
}