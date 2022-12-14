import { PersonsModel } from '../models/persons.model'

export class PersonsService {
    async getAll() {
        return await PersonsModel.find()
    }

    async create(person: any) {
        await PersonsModel.create(person)
    }

    async getById(id: string) {
        return await PersonsModel.findOne({ id });
    }
}
