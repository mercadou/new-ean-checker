<template>
  <div :style="`margin-top: ${isOnTop ? marginTop : 0}px`">
    <v-data-table
      :headers="$options.headers"
      :items="unCompleteProducts"
      :items-per-page="unCompleteProducts.length"
      class="elevation-12 mt-4"
      fixed-header
    >
      <template v-slot:body>
        <tbody>
          <tr
            v-for="(product, index) in unCompleteProducts"
            :key="index"
            :class="{ beeping: product[$options.found] > 0 }"
          >
            <td
              @click="$emit('click-table', $event.target.textContent)"
              class="ean-table"
              v-text="product[$options.ean]"
            ></td>
            <td v-text="product[$options.description]"></td>
            <td v-text="product[$options.category]"></td>
            <td v-text="product[$options.amount]"></td>
            <td v-text="product[$options.found]"></td>
          </tr>
        </tbody>
      </template>
    </v-data-table>
  </div>
</template>

<script>
import strings from "@/utils/strings";

export default {
  name: "AppTable",
  computed: {
    unCompleteProducts() {
      return this.order.filter(product => {
        return (
          product[this.$options.amount] !== product[this.$options.found] &&
          this.selectedUser === product[this.$options.user]
        );
      });
    }
  },
  props: {
    order: Array,
    selectedUser: String,
    isOnTop: Boolean,
    marginTop: Number
  },
  ...strings,
  headers: [
    { text: strings.ean, sortable: false, value: strings.ean },
    { text: strings.description, sortable: false, value: strings.description },
    { text: strings.category, value: strings.category },
    { text: strings.amount, sortable: false, value: strings.amount },
    { text: strings.found, sortable: false, value: strings.found }
  ]
};
</script>

<style>
td.ean-table {
  cursor: pointer;
  user-select: none;
}

.beeping {
  background-color: orange;
  color: black;
}
</style>
