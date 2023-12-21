<template>
  <button class="btn">
    <span>{{ msg }}</span>
  </button>
</template>
<script setup>
import { ref } from "vue";
const props = defineProps({
  msg: String,
});
</script>
<style scoped lang="scss">
.btn {
  background-color: var(--main-color);
  padding: 10px 20px;
  border: 1px solid black;
  font-size: 16px;
  cursor: pointer;
  border-radius: 2px;
  transition: 0.3s;

  &:hover {
    background-color: var(--second-color);
  }
}
</style>
