<template>
  <div class="myContainer" v-if="!store.showRegister">
    <HeaderComponent/>

    <MainComponent/>

    <FooterComponent/>

  </div>

  <div v-if="store.showRegister">
    <RegisterApp/>
  </div>



</template>

<script>
import {store} from './store';
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';
import RegisterApp from './components/RegisterApp.vue';

  export default {
    components: {
    HeaderComponent,
    MainComponent,
    FooterComponent,
    RegisterApp
  },

  data () {
    return {
      store,
    }
  }
     
}
</script>

<style lang="scss" scoped>
@import './assets/style/general.scss';

</style>
