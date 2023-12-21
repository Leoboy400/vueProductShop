<script setup>
import MyButton from "./components/UI/MyButton.vue";
import MyCadrs from "./components/MyCadrs.vue";
import MySearch from "./components/MySearch.vue";
import MyBasket from "./components/MyBasket.vue";
import MyModal from "./components/MyModal.vue";
import { ref } from "vue";
const visbleModal = ref(false);
const toggleVisble = () => {
  visbleModal.value = !visbleModal.value;
};
</script>

<template>
  <div class="wrapper">
    <MyModal @toggle="toggleVisble" v-show="visbleModal"></MyModal>
    <header class="header">
      <MyBasket @toggle="toggleVisble"></MyBasket>
      <MySearch></MySearch>
    </header>
    <section class="content">
      <MyCadrs></MyCadrs>
    </section>
    <footer class="footer">
      <div class="contact">
        <ul>
          <li>+9 700 0030 30 30</li>
          <li>mail@sdfdsfsd</li>
        </ul>
        <p>OOO "bla bla Colections" (c)</p>
      </div>
    </footer>
  </div>
</template>

<style scoped lang="scss">
ul {
  list-style: none;
}
.footer {
  background-color: rgb(65, 65, 65);
  color: #fff;
  border-radius: 10px 10px 0px 0px;
  margin-top: 20px;

  .contact {
    display: flex;
    justify-content: space-between;
    padding: 10px;
    align-items: center;
  }
}
.header {
  padding-top: 10px;
}

.wrapper {
  max-width: 900px;
  width: 100%;
  min-height: 100vh;
  padding: 0px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
</style>
