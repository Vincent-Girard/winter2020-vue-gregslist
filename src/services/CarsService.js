import { AppState } from '../AppState'
import { api } from './AxiosService'

class CarsService {
  async getCars() {
    // fetch data
    const res = await api.get('cars')
    // add to AppState
    AppState.cars = res.data
  }

  async getOne(id) {
    const res = await api.get('cars/' + id)
    AppState.activeCar = res.data
  }

  async create(car) {
    const res = await api.post('cars', car)
    AppState.cars.push(res.data)
    return res.data.id
  }
}

export const carsService = new CarsService()
