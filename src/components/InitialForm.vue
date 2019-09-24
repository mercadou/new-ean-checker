<template>
  <div>
    <div class="">
      <v-select
        :value="selectedUser"
        @input="$emit('input-user', $event)"
        :items="$options.users"
        label="Selecione o separador"
      ></v-select>
    </div>
    <div v-if="selectedUser">
      <v-select
        :value="selectedMarket"
        @input="$emit('input-market', $event)"
        :items="$options.markets"
        label="Selecione o Mercado"
      ></v-select>
    </div>
    <div v-if="selectedUser && !beeping">
      <v-btn
        @click="$emit('click-start', $event)"
        color="success"
        class="mt-4"
        rounded
        >Começar</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: "InitialForm",
  props: {
    selectedUser: String,
    selectedMarket: String,
    beeping: Boolean
  },
  markets: ["MR", "Extra", "Atacadão", "Guanabara"],
  users: ["Maykon", "Jorge"]
};
</script>

<style></style>
