<template>
  <div class="priceRange row">
    <div class="col-2">
      <h3>Price Range</h3>
    </div>

    <div class="col-2">
      <div class="card" style="width: 18rem;">
        <img src="https://via.placeholder.com/100" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Under $10K</p>
        </div>
      </div>
    </div>

    <div class="col-2">
      <div class="card" style="width: 18rem;">
        <img src="https://via.placeholder.com/100" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Under $15K</p>
        </div>
      </div>
    </div>

    <div class="col-2">
      <div class="card" style="width: 18rem;">
        <img src="https://via.placeholder.com/100" class="card-img-top" alt="..." />
        <div class="card-body">
          <p class="card-text">Under $20K</p>
        </div>
      </div>
    </div>
  </div>
</template>


<script>
export default {
  name: "priceRange",
  data() {
    return {};
  },
  computed: {},
  methods: {},
  components: {}
};
</script>


<style scoped>
.card {
  max-width: 150px;
  max-height: 100px;
}
</style>