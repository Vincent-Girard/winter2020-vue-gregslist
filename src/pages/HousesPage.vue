<template>
  <div class="row">
    <div class="col">
      <form @submit.prevent="createHouse">
        <div class="form-group-inline">
          <label for="bedrooms">bedrooms</label>
          <input type="text"
                 name="bedrooms"
                 id="bedrooms"
                 v-model="state.newHouse.bedrooms"
                 class="form-control"
                 placeholder="bedrooms..."
                 aria-describedby="helpId"
          />
        </div>
      </form>
    </div>
  </div>
  <div class="row">
    <House v-for="house in houses" :key="house.id" :house="house" />
  </div>
</template>

<script>
import { computed, onMounted, reactive } from 'vue'
import { housesService } from '../services/HousesService'
import { AppState } from '../AppState'
import House from '../components/House.vue'
import { useRouter } from 'vue-router'

export default {
  name: 'HousesPage',
  setup() {
    const router = useRouter()
    const state = reactive({
      newHouse: {}
    })
    onMounted(() => {
      try {
        housesService.getHouses()
      } catch (error) {
        console.error(error)
      }
    })
    return {
      state,

      houses: computed(() => AppState.houses),

      async createHouse() {
        try {
          const id = await housesService.create(state.newHouse)
          state.newHouse = {}
          router.push({ name: 'HouseDetails', params: { id } })
        } catch (error) {
          console.error(error)
        }
      }
    }
  },
  components: {
    House
  }
}

</script>

<style>

</style>
