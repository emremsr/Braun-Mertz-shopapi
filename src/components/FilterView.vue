<template>
  <div>
    <input type="text" v-model="filterText" />
    <ul>
      <li v-for="product in filteredProducts" :key="product.id">
        {{ product.name }} - {{ product.price }}
      </li>
    </ul>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["filteredProducts"]), // Vuex store'dan filteredProducts state'ini alıyoruz
    filterText() {
      return this.filteredProducts.filter((product) =>
        product.name.toLowerCase().includes(this.filterText.toLowerCase())
      );
    },
  },
};
</script>
