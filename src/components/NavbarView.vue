<template>
  <div
    class="lg:flex lg:items-center lg:justify-between p-5 shadow-lg text-slate-500"
  >
    <!-- Mobile Logo and Hamburger Menu -->
    <div class="lg:hidden flex justify-between items-center w-full">
      <div>
        <router-link to="/" class="text-2xl font-bold">
          Braun - Mertz
        </router-link>
      </div>
      <button @click="isMenuOpen = !isMenuOpen" class="text-2xl">☰</button>
    </div>

    <!-- Desktop Logo -->
    <div
      class="hidden lg:flex items-center justify-between p-5 shadow-lg text-slate-500 w-full"
    >
      <router-link to="/" class="text-2xl font-bold">
        Braun - Mertz
      </router-link>
      <div class="flex gap-1">
        <input
          v-model="searchText"
          class="border-2 border-slate-500 rounded-2xl px-2 py-1"
          placeholder="Search..."
          type="text"
        />
        <button
          @click="searchProducts"
          class="px-2 py-1 border-2 rounded-lg translate-x-2 translate-y-0 hover:-translate-x-0 hover:translate-y-1 transition-all duration-1000"
        >
          Search
        </button>
      </div>
      <div class="flex items-center gap-5 font-bold">
        <router-link to="/">Home</router-link>
        <router-link to="/basket"
          >
          {{ count }}
          <img class="w-5" src="../assets/basket.png" alt=""
        /></router-link>
      </div>
    </div>

    <!-- Mobile Hamburger Menu -->
    <div class="lg:hidden" v-if="isMenuOpen" @click="isMenuOpen = false">
      <!-- Off-Canvas Menu Content -->
      <div class="fixed inset-0 bg-black bg-opacity-50 z-50">
        <div
          class="w-3/4 h-full bg-white transform translate-x-0 transition-transform ease-in-out duration-300"
        >
          <div class="flex flex-col p-5">
            <router-link to="/" class="mb-2" @click="closeMenu">
              Home
            </router-link>
            <router-link to="/basket" class="mb-2" @click="closeMenu">
              Basket
            </router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions } from "vuex";

export default {
  data() {
    return {
      searchText: "",
      isMenuOpen: false,
    };
  },
  computed: {
    ...mapState(["filteredProducts"]),
  },
  methods: {
    ...mapActions(["filterProducts"]),
    searchProducts() {
      if (this.searchText !== undefined) {
        // Metnin tanımlı olduğunu kontrol ediyoruz
        this.filterProducts(this.searchText);
      }
    },
    closeMenu() {
      this.isMenuOpen = false;
    },
  },
};
</script>
