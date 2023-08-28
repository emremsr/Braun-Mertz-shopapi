<template>
  <div class="grid grid-cols-1 lg:grid-cols-2 place-items-center ">
    <div class="w-64 h-auto mt-5">
      <img
        class="w-full object-scale-down"
        :src="product.image"
        :alt="product.title"
      />
    </div>
    <div class="w-3/4 pt-10">
      <p class="text-2xl font-semibold mb-2">{{ product.title }}</p>
      <p class="text-gray-600 mb-4">
        {{ product.description }}
      </p>
      <p class="capitalize mb-1">Categoty : {{ product.category }}</p>
      <p class="text-xl text-gray-800 mb-1">Price: ${{ product.price }}</p>
      <p class="text-gray-600 mb-1">Rate : {{ product.rating.rate }}</p>
      <p class="text-gray-600">Count : {{ product.rating.count }}</p>

      <div class="flex items-center justify-between mt-10">
        <div class="flex items-center justify-between gap-5">
          <button class="border-2 px-4 py-1 bg-red-600 text-white rounded-2xl">
            -
          </button>
          <p>0</p>
          <button
            class="border-2 px-4 py-1 bg-green-600 text-white rounded-2xl"
          >
            +
          </button>
        </div>
        <button
          class="border-2 px-10 py-1 bg-green-600 text-white rounded-md hover:px-14 transition-all duration-500"
        >
          Add To Card
        </button>
      </div>
    </div>
  </div>
</template>

<script>
import { mapState } from "vuex";

export default {
  computed: {
    ...mapState(["products"]),
    product() {
      // Route'dan gelen ID parametresini alın
      const productId = parseInt(this.$route.params.id);
      // products state'indeki ürünleri filtreleyerek ilgili ürünü bulun
      return this.products.find((product) => product.id === productId);
    },
  },
};
</script>
