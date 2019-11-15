<template>
  <div class="home container-fluid">
    <navbar />
    <imageRow />
    <bodyType />
  </div>
</template>


<script>
import navbar from "../components/navbar";
import imageRow from "../components/imageRow";
import bodyType from "../components/bodyType";

export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { navbar, imageRow, bodyType }
};
</script>


<style scoped>
</style>