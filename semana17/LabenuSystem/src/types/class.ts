export enum CLASS_SHIFT {
    FULL = "integral",
    NIGHT = "noturno"
}
export type Class = {
    name: string,
    start_date: string,
    end_date: string,
    stage?: number,
    shift: CLASS_SHIFT
}