<template>
  <div class="home container-fluid">
    <navbar />
    <imageRow />
    <bodyType />
    <priceRange />
  </div>
</template>


<script>
import navbar from "../components/navbar";
import imageRow from "../components/imageRow";
import bodyType from "../components/bodyType";
import priceRange from "../components/priceRange";

export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { navbar, imageRow, bodyType, priceRange }
};
</script>


<style scoped>
</style>