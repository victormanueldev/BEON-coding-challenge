import { FlightsModel } from '../models/flights.model'

export class FlightsService {
    async getAll() {
        return await FlightsModel.find()
    }

    async getById(id: string) {
        return await FlightsModel.findOne({ id })
    }

    async create(flight: any) {
        return await FlightsModel.create(flight)
    }

    async update(flight: any, id: string) {
        return await FlightsModel.updateOne({ id }, { flight })
    }

    


}
