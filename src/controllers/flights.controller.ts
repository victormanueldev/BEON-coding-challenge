import { JsonController, Get, Post, Body } from 'routing-controllers'
import { FlightsService } from '../services/flights.service'
import { PersonsService } from '../services/persons.service'

const flightsService = new FlightsService()
const personsService = new PersonsService()

@JsonController('/flights')
export default class FlightsController {
    @Get('', { transformResponse: true })
    getAll() {
        return {
            status: 200,
            data: flightsService.getAll(),
        }
    }

    @Post('/onboard', { transformResponse: true })
    async onboard(@Body() flight: any) {
        try {
            // Find person by ID
            const person =  await personsService.getById(flight.person.id)
            // Find fligth by ID
            const flightUpdated = await flightsService.update({ '$push': { person: person.id }}, flight.id)

            return {
                status: 200,
                data: flightUpdated
            }

        } catch (error) {
            return {
                status: 500,
                data: { message: `/onboard ERROR ${error}`}
            }
        }
    }
}
