<template>
        <div class="container-loader">
        <div class="lds-ring"><div></div><div></div><div></div><div></div></div>
        <h2 class="text-uppercase">Loading ...</h2>
    </div>

</template>

<script>
import {store} from '../store';
    export default {
        name: 'LoaderComponent',
    }
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';

    //LOADER 

    .container-loader {
        background-image: url(../../public/images/h5-parallax-img-1.png);
        background-position: center;
        object-fit: cover;
        height: 100vh;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        color: white
    }

    .lds-ring {
        display: inline-block;
        position: relative;
        width: 80px;
        height: 80px;
    }
    .lds-ring div {
        box-sizing: border-box;
        display: block;
        position: absolute;
        width: 64px;
        height: 64px;
        margin: 8px;
        border: 8px solid #045d8c;
        border-radius: 50%;
        animation: lds-ring 1.2s cubic-bezier(0.5, 0, 0.5, 1) infinite;
        border-color: #045d8c transparent transparent transparent;
    }
    .lds-ring div:nth-child(1) {
        animation-delay: -0.45s;
    }
    .lds-ring div:nth-child(2) {
        animation-delay: -0.3s;
    }
    .lds-ring div:nth-child(3) {
        animation-delay: -0.15s;
     }

     @keyframes lds-ring {
        0% {
            transform: rotate(0deg);
        }
        100% {
            transform: rotate(360deg);
        }
    }



</style>