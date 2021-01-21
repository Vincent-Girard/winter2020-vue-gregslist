import { AppState } from '../AppState'
import { api } from './AxiosService'

class HousesService {
  async getHouses() {
    // fetch data
    const res = await api.get('houses')
    // add to AppState
    AppState.houses = res.data
  }

  async getOne(id) {
    const res = await api.get('houses/' + id)
    AppState.activeHouse = res.data
  }

  async create(house) {
    const res = await api.post('houses', house)
    AppState.houses.push(res.data)
    return res.data.id
  }
}

export const housesService = new HousesService()
