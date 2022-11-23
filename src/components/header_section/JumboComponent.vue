<template>
    <div class="myWrapper">
        <div class="container-info-jumbo text-center">

                <Transition name="slide-fade">
                    <div v-if="enterFade">
                        <h1 class="title-jumbo">Contemporary Ideas</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi deserunt harum est tenetur corporis, dolorum quas pariatur voluptate non consequuntur autem nesciunt commodi ullam in error mollitia?</p>
                        <button class="myBTN text-uppercase" @click="store.showRegisterFn">Register now</button>
                    </div>
                </Transition>
        </div>
    </div>


</template>

<script>
import {store} from '../../store';
    export default {

        name: 'JumboComponent',

        data () {
            return {
                enterFade: false,
                store,
            }
        },

        methods: {
            showInfo() {
                this.enterFade = true;
            }
        },

        mounted () {
            this.showInfo();
        }

    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';
@import "https://cdnjs.cloudflare.com/ajax/libs/animate.css/4.1.1/animate.min.css";

    .myBTN {
        background-color: #045d8c;
        padding: 10px;
        color: white;
        border: none;
    }

    .title-jumbo {
        font-size: 5rem;
    }

    p {
        word-wrap: break-word;
    }

    .container-info-jumbo{
        max-width: 80%;
        margin: 0 auto;
        line-height: 2rem;
    }

    .slide-fade-enter-active {
  transition: all 1s ease-out;
}

.slide-fade-leave-active {
  transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>