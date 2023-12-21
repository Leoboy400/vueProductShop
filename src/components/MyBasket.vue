<template>
  <div class="block__basket">
    <button @click="toggle" class="btn__basket">
      <img src="../img/bracked.png" alt="" />
    </button>
    <div class="caunt">
      <span>{{ storeBasket.basketData.length }}</span>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
import { useStoreBasket } from "../store/storeBasket.js";
const storeBasket = useStoreBasket();

const emits = defineEmits(["toggle"]);

function toggle() {
  emits("toggle");
}
const caunt = ref(0);
</script>
<style lang="scss">
.block__basket {
  position: relative;
  display: flex;
  justify-content: flex-end;
  margin-bottom: 5px;
}

.btn__basket {
  background-color: rgba(250, 235, 215, 0);
  border: 0px solid black;
  cursor: pointer;
  position: relative;
  transition: 0.3s;
  border-radius: 5px;
  padding: 2px;

  &:hover {
    box-shadow: 0px 0px 4px 4px var(--main-color);
  }
}

.caunt {
  border-radius: 50%;
  background-color: red;
  width: 18px;
  height: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 10;
  bottom: 0px;
  right: 20px;
  pointer-events: none;
}
</style>
