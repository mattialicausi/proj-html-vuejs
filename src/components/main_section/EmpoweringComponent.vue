<template>
    <div class="container-empowering row">
        
        <div class="container-image col-6">
            <img src="../../../public/images/h5-img-2.jpg" alt="image of empowering children">
        </div>

        <div class="container-content h-100 col-6">
            <h2>Empowering Children to reach Their Potential.</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum velit quae quaerat reprehenderit iste soluta vitae sit qui fugiat at.</p>
            <div class="d-flex justify-content-center align-items-center w-100">
                <div class="container-info mx-2">
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

    .container-empowering{
        display: flex;
        align-items: center;
        justify-content: center;
        height: auto;
        margin-top: 50px;
        margin-bottom: 50px;
    }

    .container-info {
        text-align: center;
        color: rgb(101, 195, 249);
        .number-info {
           font-size: 2rem; 
        }
    }
    .container-image{
        width: 40%;
        margin-top: 50px;
        ;
        img {
            width: 100%;
        }
    }

</style>