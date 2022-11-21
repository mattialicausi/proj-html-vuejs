<template>
    <header>
    <div class="wrapper">
        <section class="nav-bar ">
            <NavBarApp/>
        </section>

        <section class="jumbo d-flex justify-content-center align-items-center position-relative">
            <JumboComponent/>
        </section>
    </div>
    </header>

    <div class="container-indici d-flex align-items-center justify-content-center ">
        <div class="indici"></div>
        <div class="indici"></div>
        <div class="indici"> <div class="selezionato"></div></div>
    </div>
</template>

<script>
import JumboComponent from './header_section/JumboComponent.vue';
import NavBarApp from './header_section/NavBarApp.vue';

    export default {
    name: "HeaderComponent",
    components: {
    NavBarApp,
    JumboComponent
},

}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';
    header {
        background-image: url(../../public/images/course-9-f-img.jpg);
        background-size: cover;

    }
    .wrapper {
        background-color: rgba(0,0,0,0.3);
    }

    .container-indici {
        position: absolute;
        bottom: 10px;
        left: 47%;
    }
    .indici {
        background-color: gray;
        width: 20px;
        height: 20px;
        margin: 0 5px;
        border-radius: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid white
    }

    .indici:hover {
        cursor: pointer;
    }

    .selezionato{
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: white;
    }


</style>