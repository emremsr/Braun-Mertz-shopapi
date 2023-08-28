<template>
  <div>
    <CardView />
  </div>
</template>

<script>
import CardView from "@/components/CardView.vue";
import { mapActions, mapState } from "vuex";
export default {
  computed: {
    ...mapState(["products", "category", "count"]),
  },
  methods: {
    ...mapActions(["fetchProducts", "fetchCategory"]),
  },
  mounted() {
    this.fetchProducts();
    this.fetchCategory();
  },
  data() {
    return {
      message: "Vuex ile EscuelaJS API Örneği",
      counter: 0,
    };
  },
  components: { CardView },
};
</script>

<style lang="scss" scoped></style>
