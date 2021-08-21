import Trip from "../classes/trip";
import connection from "../connection";

export class TripDatabase {
    private connection: any

    constructor() {
        this.connection = connection('labecom_trips')
    }
    public async create(trip: Trip) {
        await this.connection
            .insert(trip)
    }

    public async getAll() {
        
    }
}