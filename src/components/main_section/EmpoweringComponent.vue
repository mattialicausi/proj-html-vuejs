<template>
    <div class="container-empowering d-flex">
        
        <div class="container-image">
            <img src="../../../public/images/h5-img-2.jpg" alt="image of empowering children">
        </div>

        <div class="container-content">
            <h3>Empowering Children to reach Their Potential.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit quae quaerat reprehenderit iste soluta vitae sit qui fugiat at.</p>
            <div class="d-flex">
                <div class="container-info">
                    <div class="number-info">168</div>
                    <div>User Stories</div>
                </div>
                <div class="container-info">
                    <div class="number-info">347</div>
                    <div>Events</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'EmporeringComponent',
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .container-empowering, .container-content{
        margin: 30px auto;
        width: calc(100% / 2);
    }

    .container-info {
        width: calc(100% / 2);
        text-align: center;
        color: rgb(101, 195, 249);
        .number-info {
           font-size: 2rem; 
        }
    }
    .container-image{
        width: 500px;

        img {
            width: 100%;
        }
    }

</style>