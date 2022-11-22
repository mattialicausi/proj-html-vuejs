<template>
    <div class=" container-navbar myWrapper d-flex justify-content-between align-items-center row h-100">
    
        <div class="container-logo-navbar col-3">
            <img src="../../../public/images/logo-light.png" alt="logo">
        </div>
    
        <div class="d-flex justify-content-between align-items-center h-100 d-sm-none d-md-flex col-6 ">
            <ul v-for="(item, index) in navOptions" :key="index">
                <li class="text-uppercase h-100">{{item}}</li>
            </ul>
        </div>
        
        <div class="container-icon-navbar d-flex justify-content-center align-items-center  col-3">
            <i class="fa-solid fa-magnifying-glass"></i>
            <i class="fa-solid fa-bag-shopping"></i>
            <i class="fa-solid fa-bars"></i>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'NavBarApp',
        data() {
            return {
                navOptions: [
                    'home',
                    'courses',
                    'instructors',
                    'events',
                    'pages',
                    'elements'
                ],
            }
        },

    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    // .container-navbar {
    //     width: 100%;
    // }
    .container-logo-navbar{
        // width: 100%;
        display: flex;
        align-items: center;

        img {
            width: 200px;
        }
    }

    ul {
        margin-bottom: 0;

        li{
            list-style: none;
            font-size: 1.5rem;
            padding: 0 10px;
        }
    }

    ul li:hover {
        color:  rgb(101, 195, 249);
        cursor: pointer;
        border-bottom: 2px solid  rgb(101, 195, 249);
        transition: background-color linear 1s;
        transition: border-bottom linear 1s;
    }

    .container-icon-navbar{

        i{
            font-size: 1.5rem;
            margin: 0 15px;
        }
    }

</style>