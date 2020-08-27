<template>
  <div>
    index
    <TheFooter />
  </div>
</template>

<script>
import TheFooter from '../footer/TheFooter.vue'
export default {
  name: 'Index',
  components: {
    TheFooter
  },
  data () {
    return {}
  },
  created () {
    this.getProductInfo()
  },
  methods: {
    getProductInfo () {
      this.axios({
        method: 'get',
        url: 'ProductInfo/GetProductInfo',
        data: {}
      })
        .then((res) => {

        })
        .catch((error) => {
          console.error(error.toString())
        })
    }
  }
}
</script>

<style scoped>
</style>
