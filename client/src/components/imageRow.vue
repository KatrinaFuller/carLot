<template>
  <div class="imageRow">
    <img :src="'../assets/cars.jpg'" alt />
  </div>
</template>


<script>
export default {
  name: "imageRow",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.imageRow {
  max-height: 30vh;
  max-width: auto;
  background-color: pink;
}
</style>