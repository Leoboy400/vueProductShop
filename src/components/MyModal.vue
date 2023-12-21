<template>
  <div class="modal">
    <MyButton @click="toggle" class="close" :msg="'X'"></MyButton>
    <div class="modal__content">
      <ul class="pay" v-for="item in storeBasket.basketData">
        <li class="pay__item">
          <div class="pay__img"><img src="../img/babina.png" alt="" /></div>
          <span>{{ item.name }}</span>
          <MyButton
            @click="storeBasket.removeInBasket(item.productId)"
            :id="item.productId"
            class="del"
            :msg="'убрать'"
          >
          </MyButton>
        </li>
      </ul>
      <MyButton @click="" class="btn__pay" :msg="'Купить'"></MyButton>
      <p>{{ storeBasket.fullPrice }}</p>
    </div>
  </div>
</template>
<script setup>
import MyButton from "./UI/MyButton.vue";
import { useStoreBasket } from "../store/storeBasket.js";
const storeBasket = useStoreBasket();

const emits = defineEmits(["toggle"]);

function toggle() {
  emits("toggle");
}
</script>
<style scoped lang="scss">
.pay {
  list-style: none;

  .pay__item {
    margin-bottom: 5px;
    display: flex;
    justify-content: space-between;
    background-color: var(--second-color);
    padding: 5px;
    align-items: center;
  }
}

.close {
  padding: 0px;
  position: absolute;
  // top: -20px;
  // left: 20px;
  z-index: 30;
  top: 20px;
  right: 20px;
}

.del {
  padding: 0px;
}

.modal {
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  top: 0;
  left: 0;
  background-color: rgba(67, 67, 67, 0.755);
  z-index: 20;
}

.modal__content {
  overflow-y: scroll;
  position: relative;
  width: 700px;
  height: 500px;
  margin: 0 auto;
}

.pay__img {
  height: 50px;
  width: 100px;

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
}
</style>
