import { createStore } from "vuex";

import axios from "axios";

export default createStore({
  state: {
    products: [],
    category: [],
    count: 0,
    addToBasket: [],
    filteredProducts: [],
  },
  getters: {
    getProductById: (state) => (id) => {
      return state.products.find((product) => product.id === id);
    },
    getTotalPrice: (state) => {
      let total = 0;
      state.addToBasket.forEach((item) => {
        total += item.price * item.quantity;
      });
      return total * state.count;
    },
  },
  mutations: {
    increase(state) {
      state.count++;
    },
    decrease(state) {
      state.count--;
    },
    increaseQuantity(state, product) {
      product.quantity++; // Ürünün miktarını artırın.
    },

    decreaseQuantity(state, product) {
      if (product.quantity > 1) {
        product.quantity--; // Ürünün miktarını azaltın.
      }
    },
    setProducts(state, products) {
      state.products = products;
    },
    setCategory(state, category) {
      state.category = category;
    },
    addNewProductToBasket(state, product) {
      state.addToBasket.push({ ...product, quantity: 1 });
    },
    deleteBasket(state, index) {
      state.addToBasket.slice(index, 1);
    },
    setFilteredProducts(state, filteredProducts) {
      state.filteredProducts = filteredProducts;
    },
  },
  actions: {
    async fetchProducts({ commit }) {
      const response = await axios.get("https://fakestoreapi.com/products");
      commit("setProducts", response.data);
    },

    addToBasket1({ state, commit }, product) {
      // Eğer ürün zaten sepete eklenmişse, miktarını artırın; aksi halde sepete yeni ürün ekleyin.
      const existingProduct = state.addToBasket.find(
        (item) => item.id === product.id
      );
      if (existingProduct) {
        commit("increaseQuantity", existingProduct);
      } else {
        commit("addNewProductToBasket", product);
      }
      commit("setBasket"); // Sepeti güncellemek için mutation çağrısı.
    },
    filterProducts({ commit, state }, searchText) {
      if (searchText.trim() === "") {
        commit("setFilteredProducts", []);
      } else {
        const filteredProducts = state.products.filter((product) =>
          product.name.toLowerCase().includes(searchText.toLowerCase())
        );
        commit("setFilteredProducts", filteredProducts);
      }
    },
  },
  modules: {},
});
