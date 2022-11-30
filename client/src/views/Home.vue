<script>
import { useCounterStore } from "../stores/counter";
import { mapActions, mapState } from "pinia";
import Card from "../components/Card.vue";

export default {
  data() {
    return {
      item: "",
      quantity: "",
    };
  },
  components: {
    Card,
  },
  created() {
    this.fetchItems();
  },
  computed: {
    ...mapState(useCounterStore, ["items"]),
  },
  methods: {
    ...mapActions(useCounterStore, ["fetchItems"]),
  },
};
</script>

<template>
  <div class="container mt-3">
    <h1 class="text-center text-light">Search Game Here</h1>
    <div class="row mt-3">
      <Card v-for="(item, idx) in items" :key="idx" :item="item" />

      <form v-on:submit.prevent="loginHandler">
        <div class="mb-3">
          <label for="login-email" class="form-label">Nama Item</label>
          <select class="form-select" required v-model="item">
            <option value="" selected disabled>-- Select Items --</option>
            <option
              v-for="(item, index) in items"
              :key="index"
              :value="item.nameItem"
            >
              {{ item.nameItem }}
            </option>
          </select>
        </div>
        <div class="mb-3">
          <label for="login-password" class="form-label">Quantity</label>
          <input
            type="number"
            class="form-control"
            id="login-password"
            rows="3"
            required
            placeholder="Enter your quantity ..."
            v-model="quantity"
          />
        </div>
        <button type="submit" class="btn btn-primary">Buy</button>
      </form>
    </div>
  </div>
</template>
