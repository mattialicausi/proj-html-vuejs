<template>
    <header :class=" index = this.activeIndex ? 'bg' + this.activeIndex  : ''">
    <div class="wrapper">
        <section class="nav-bar">
            <NavBarApp/>
        </section>

        <section class="jumbo d-flex justify-content-center align-items-center position-relative">
            <JumboComponent/>
        </section>
    </div>
    </header>

    <div class="container-indici d-flex align-items-center">
            <div  v-for="(item, index) in indiciLista" :key="index">
                <div class="indice mx-2" @click.prevent="getActive(index)">
                    <div :class="index + 1 === activeIndex ? 'selezionato': ''">{{indiciLista.index}}</div>
                </div>
            </div>
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
    data() {
        return {
            indiciLista: [
                {
                    selezionato: true
                },
                {
                    selezionato: false
                },
                {
                    selezionato: false
                },
            ],

            activeIndex: 1,

        }
    },

    methods: {
        getActive(i) {
            this.activeIndex = i + 1;
            console.log('click');
            console.log(this.activeIndex);
            console.log(i)
        },

        nextScroll(){
            this.activeIndex++
            if(this.activeIndex > 3){
                this.activeIndex = 1;
            }
        },

        autoScroll(){
            this.scroll = setInterval(()=> {
                this.nextScroll();
            }, 2000)
        },
        
    },
    mounted () {
        this.autoScroll();
    }

}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';
    header {
        background-size: cover;
    }

    .bg1{
        background-image: url(../../public/images/h1-slide-1-background.jpg);
    }

    .bg2{
        background-image: url(../../public/images/course-9-f-img.jpg);
    }

    .bg3{
        background-image: url(../../public/images/h5-slide-1-background.jpg);
    }
    .wrapper {
        background-color: rgba(0,0,0,0.3);
    }

    .container-indici {
        position: absolute;
        top: 72%;
        left: 45%;
        right: 45%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }
    .indice {
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

    .indice:hover {
        cursor: pointer;
    }

    .selezionato{
        height: 10px;
        width: 10px;
        border-radius: 50%;
        background-color: white;
    }

    .nav-bar {
        position: sticky;
        top: 0;
        left: 0;
        right: 0;
        width: 100%;
    }


</style>