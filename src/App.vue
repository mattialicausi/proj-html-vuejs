<template>
    <HeaderComponent/>

    <MainComponent/>

    <FooterComponent/>


</template>

<script>
import FooterComponent from './components/FooterComponent.vue';
import HeaderComponent from './components/HeaderComponent.vue';
import MainComponent from './components/MainComponent.vue';

  export default {
    components: {
    HeaderComponent,
    MainComponent,
    FooterComponent
},
     
}
</script>

<style lang="scss" scoped>
@import './assets/style/general.scss';

</style>
