<template>
  <div class="card">
    <h2 class="card__titile">{{ titleCard }}</h2>
    <img :src="imgSrc" alt="image" />
    <h2 class="card__pay">{{ payCard }}</h2>
    <p class="card__text">{{ textCard }}</p>
    <MyButton
      @click="storeBasket.addInBasket(btnId)"
      :id="btnId"
      :msg="'Take my money'"
    ></MyButton>
  </div>
</template>

<script setup>
import MyButton from "./MyButton.vue";
import { useStoreBasket } from "../../store/storeBasket";
const storeBasket = useStoreBasket();

const props = defineProps({
  titleCard: String,
  textCard: String,
  imgSrc: String,
  payCard: String || Number,
  btnId: Number,
});

import { ref } from "vue";
</script>
<style lang="scss">
.card {
  background-color: var(--second-color);
  padding: 15px 10px;
  max-width: 250px;
  margin: 10px;
  height: 400px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  img {
    max-height: 200px;
    width: 100%;
  }
}
</style>
