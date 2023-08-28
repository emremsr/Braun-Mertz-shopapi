<template>
  <div>
    <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead
          class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400"
        >
          <tr>
            <th scope="col" class="px-6 py-3 text-center">Images</th>
            <th scope="col" class="px-6 py-3">Product name</th>
            <th scope="col" class="px-6 py-3">Price</th>
            <th scope="col" class="px-6 py-3 text-center">Total</th>
            <th scope="col" class="px-6 py-3">Category</th>
            <th scope="col" class="px-6 py-3 text-center">Total Price</th>
          </tr>
        </thead>
        <tbody>
          <tr
            v-for="item in addToBasket"
            :key="item.id"
            class="bg-white border-b dark:bg-gray-800 dark:border-gray-700"
          >
            <td class="px-6 py-4 flex items-center justify-center">
              <img class="w-10 h-8 object-scale-down" :src="item.image" alt="" />
            </td>
            <th
              scope="row"
              class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
            >
              {{ item.title }}
            </th>
            <td class="px-6 py-4">${{ item.price }}</td>
            <td class="px-6 py-4 flex items-center justify-center gap-4">
              <button
                class="border-2 px-2 py-1 bg-red-500 text-white rounded-2xl font-bold text-center"
                @click="decreaseQuantity(item)"
              >
                -
              </button>
              {{ item.quantity }}
              <button
                class="border-2 px-2 py-1 bg-green-500 text-white rounded-2xl font-bold text-center"
                @click="increaseQuantity(item)"
              >
                +
              </button>
            </td>
            <td class="px-6 py-4">{{ item.category.name }}</td>
            <td class="px-6 py-4">
              <p
                class="bg-black text-white w-full text-center font-bold py-1 rounded-md"
              >
                ${{ item.quantity * item.price }}
              </p>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
  </div>
</template>

<script>
import { mapState, mapActions, mapMutations, mapGetters } from "vuex";

export default {
  computed: {
    ...mapState(["products", "addToBasket", "count"]),
    ...mapGetters(["getTotalPrice"]),
  },
  methods: {
    ...mapActions(["fetchProducts", "addToBasket1"]),
    ...mapMutations(["setProducts", "deleteBasket"]),
    increaseQuantity(product) {
      this.$store.commit("increaseQuantity", product);
    },

    decreaseQuantity(product) {
      this.$store.commit("decreaseQuantity", product);
    },
  },
  setup() {
    return {
      total: 0,
    };
  },
};
</script>
