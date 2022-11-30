<script>
import { useCounterStore } from "../stores/counter";

export default {
  props: ["item"],
};
</script>

<template>
  <div class="card" style="width: 18rem">
    <img :src="item.imageUrl" class="card-img-top" alt="..." />
    <div class="card-body">
      <h5 class="card-title">{{ item.nameItem }}</h5>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">Unit: {{ item.unit }}</li>
      <li class="list-group-item">Stock: {{ item.stock }}</li>
      <li class="list-group-item">Price: {{ item.price }}</li>
    </ul>
  </div>
</template>
