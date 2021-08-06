import connection from "../connection";

export class TripDatabase {
    public async create(trip: any) {
        await connection('labecom_trips')
            .insert({})
    }

    public async getAll() {
        
    }
}