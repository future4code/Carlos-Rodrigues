import Item from "./item";

export default class Trip extends Item {
    private trip: string

    constructor(
        id: number,
        trip: string,
        description: string,
        price: number
    ) {
        super(id,description, price)
        {
            this.trip = trip
        }
    }
}