<template>
  <div class="search__block">
    <input
      @keydown.enter="enterKeydown"
      v-model="valueInput"
      placeholder="search"
      class="search"
      type="text"
    />
    <div class="icon"><img src="../img/search_104498.png" alt="" /></div>
  </div>
</template>
<script setup>
import { useStoreSpool } from "../store/storeSpool";
import { ref } from "vue";
const storeSpool = useStoreSpool();

const enterKeydown = () => {
  storeSpool.search(valueInput.value);
  if (valueInput.value == "") {
    storeSpool.add();
  }
};
let valueInput = ref("");
</script>
<style scoped lang="scss">
.search {
  width: 100%;
  padding: 10px 10px 10px 50px;
  border-radius: 5px;
  border: 2px solid var(--main-color);

  &:focus {
    border: 3px solid var(--second-color);
    outline: 0px;
  }
}

.search__block {
  position: relative;
}

.icon {
  position: absolute;
  top: 7px;
  left: 10px;
  width: 28px;
  height: 28px;
  img {
    width: 100%;
    height: 100%;
  }
}
</style>
