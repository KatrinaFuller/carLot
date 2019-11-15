<template>
  <div class="home">
    <navbar />
    <imageRow />
  </div>
</template>


<script>
import navbar from "../components/navbar";
import imageRow from "../components/imageRow";

export default {
  name: "home",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: { navbar, imageRow }
};
</script>


<style scoped>
</style>