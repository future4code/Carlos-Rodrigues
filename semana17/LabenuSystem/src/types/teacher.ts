export enum EXPERTISE {
    FRONT = "frontend",
    BACK = "backend"
}

export type Teacher = {
    name: string,
    email: string,
    birth_date: string,
    class_id: number,
    expertise: EXPERTISE
}