<template>
  <div>
    <div
      class="p-4 grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2"
    >
      <div v-for="product in products" :key="product.id">
        <div
          class="h-full border-2 border-gray-200 border-opacity-60 rounded-lg shadow-lg hover:shadow-2xl overflow-hidden"
        >
          <img
            class="h-32 lg:h-48 md:h-36 w-full object-scale-down"
            :src="product.image"
            alt="blog"
          />
          <div class="p-6">
            <h2
              class="tracking-widest text-xs title-font font-medium text-gray-400 mb-1"
            >
              {{ product.category.name }}
            </h2>
            <div class="flex items-center justify-between">
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                {{ product.title }}
              </h1>
              <h1 class="title-font text-lg font-medium text-gray-900 mb-3">
                ${{ product.price }}
              </h1>
            </div>
            <p class="leading-relaxed mb-3">
              {{ product.description }}
            </p>
            <div class="flex items-center justify-between">
              <a
                class="border-2 rounded-md bg-indigo-500 text-white px-2 py-1 hover:bg-indigo-400 inline-flex items-center md:mb-2 lg:mb-0"
              >
                <router-link :to="'/product/' + product.id">Learn More</router-link>
                <svg
                  class="w-4 h-4 ml-2"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  stroke-width="2"
                  fill="none"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                >
                  <path d="M5 12h14"></path>
                  <path d="M12 5l7 7-7 7"></path>
                </svg>
              </a>
              <button
                class="border-2 rounded-md bg-green-500 text-white px-2 py-1 hover:bg-green-400"
                @click="addToBasket1(product)"
              >
                Sepete Ekle
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations } from "vuex";

export default {
  computed: {
    ...mapState(["products", "addToBasket", "count"]),
  },
  methods: {
    ...mapActions(["fetchProducts", "addToBasket1"]),
    ...mapMutations(["setProducts", "increaseQuantity", "decreaseQuantity"]),
  },
};
</script>

<style lang="scss" scoped></style>
