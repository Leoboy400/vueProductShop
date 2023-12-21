<template>
  <div class="cards">
    <div v-for="item in storeSpool.jsonplasholder">
      <MyCard
        :text-card="item.name"
        :title-card="'Spool'"
        :img-src="'../../src/img/babina.png'"
        :pay-card="item.price + '$'"
        :btnId="item.id"
      >
      </MyCard>
    </div>
  </div>
</template>
<script setup>
import MyCard from "./UI/MyCard.vue";
import { useStoreSpool } from "../store/storeSpool.js";

const storeSpool = useStoreSpool();
</script>
<style lang="scss">
.cards {
  justify-content: center;
  display: flex;
  flex-wrap: wrap;
}
</style>
