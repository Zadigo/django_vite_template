<template>
  <div class="container">
    <div class="row my-5">
      <div class="col-12">
        <base-card>
          <template #body>
            <h1>Home view / <span class="text-primary">{{ pageName }}</span></h1>
            <a :href="window.reverseUrl('vue_app:home_view')">Home</a>
            <a href @click.prevent="showModal = !showModal">Modal</a>
          </template>
        </base-card>
      </div>
    </div>

    <base-modal id="some-modal" :show="showModal" @close="showModal = false">
      Some value
    </base-modal>
  </div>
</template>

<script>
import BaseCard from '../layouts/bootstrap/cards/BaseCard.vue'
import BaseModal from '../layouts/bootstrap/BaseModal.vue'

export default {
  name: 'IndexView',
  props: {
    pageName: {
      type: String
    }
  },
  components: {
    BaseCard,
    BaseModal
  },
  setup () {
    return {
      window
    }
  },
  data () {
    return {
      showModal: false
    }
  },
  methods: {
    goTo () {
      return window.reverseUrl('vue_app:home_view')
    }
  }
}
</script>

<style scoped>
</style>
