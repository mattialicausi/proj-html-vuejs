<template>
    <div class="myWrapper d-flex justify-content-between align-items-center">
    
        <div class="container-logo-navbar">
            <img src="../../../public/images/logo-light.png" alt="logo">
        </div>
    
        <div class="d-flex justify-content-between align-items-center h-100">
            <ul v-for="(item, index) in navOptions" :key="index">
                <li class="text-uppercase h-100">{{item}}</li>
            </ul>
        </div>
        
        <div class="container-icon-navbar d-flex justify-content-between align-items-center p-5">
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
    .container-logo-navbar{
        width: 200px;
        margin-left: 10px;

        img {
            width: 100%;
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

    .container-icon-navbar{

        i{
            font-size: 1.5rem;
            margin: 0 15px;
        }
    }

</style>