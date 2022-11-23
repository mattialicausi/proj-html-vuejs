<template>
    <div class="myWrapper">

        <div class="container-home-tutoring">

            <div class="info">
                <h3>The Trusted Name for IN-Home Tutoring.</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Facere eaque voluptates quia blanditiis eius fugit a voluptate alias, recusandae ut Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsum, magnam.</p>
                <div class="text-uppercase more">learn more</div>
            </div>

            <div class="container-img">
                <img src="../../../public/images/h5-img-1.jpg" alt="image of home tutoring">
            </div>

        </div>

    </div>
</template>

<script>
    export default {
        name: 'HomeTutoring',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    h3 {
        max-width: 300px;
        word-wrap: break-word;
    }
    .more{
        color: #045d8c;
        font-size: 14px;
    }

    .container-img {
        width: 70%;
        margin: 0 auto;

        img {
            width: 100%;
        }
    }
</style>