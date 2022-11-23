<template>
    <div class="register-button">
        <div class="header-register">
            <div class="mywrapper header-d">
                <h1>Become an Instructor</h1>
                <h3 class="text-uppercase" @click="store.showRegisterFn">Back to home</h3>
            </div>
        </div>

        <div class="main-register">
            <div class="mywrapper row d-flex align-items-center justify-content-center">
                <div class="left col-6">
                    <img src="../../public/images/h9-event-img-1.jpg" alt="image of teacher">
                </div>

                <Transition name="slide-fade">
                    <div class="right col-6" v-if="enterFade">
                        <form class="form">
                            <h4 class="text-uppercase">Fill this form to apply</h4>
                            <div>Name:</div>
                            <input type="text" name="name" id="name">
                            <div>Email:</div>
                            <input type="text" name="email" id="email">
                            <div>Contact:</div>
                            <input type="text" name="contact" id="contact">
                            <div>Comment:</div>
                            <textarea name="comment" id="comment" cols="20" rows="2"></textarea>
                            <div class="btn-submit rounded-2 d-flex justify-content-center align-items-center text-uppercase">submit</div>
                        </form>
                    </div>
                </Transition>

            </div>
        </div>

        <div class="footer-register">
                <FooterComponent/>
        </div>
    </div>
</template>

<script>
import {store} from '../store';
import FooterComponent from './FooterComponent.vue';
    export default {
    name: "ResisterApp",
    components: { FooterComponent },

    data() {
        return {
            store,
            enterFade: false,
        };
    },

    methods: {
            showInfo() {
                this.enterFade = true;
            }
        },

        mounted () {
            this.showInfo();
        },

}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';

    .header-register {
        background-image: url(../../public/images/h5-parallax-img-1.png);
        object-fit: cover;
        background-position: center;
        color: white;

        .header-d {
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
        }
    }
    .mywrapper {
        max-width: 1200px;
        margin: 0 auto;
        width: 100%;
        height: 100%;
    }

    h4 {
        color: gray;
    }

    img {
        width: 100%;
    }

    h3:hover {
        cursor: pointer;
        color: #045d8c;;
        transition: color 500ms linear;
    }

    .form {
        border: 1px solid rgb(243, 248, 251);
        padding: 0 10px;

        input {
            border: none;
            background-color: rgb(243, 248, 251);
        }

        div {
            border: 1px solid rgb(243, 248, 251);
        }
    }

    .btn-submit {
        background-color: #045d8c;
        color: white;
        padding: 10px;
        width: 50%;

        &:hover {
            cursor: pointer;
            background-color: rgb(105, 181, 220);
            color: rgb(243, 248, 251);
            transition: color 500ms linear;
            transition: background-color 500ms linear;
        }
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