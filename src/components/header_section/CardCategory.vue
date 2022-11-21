<template>
    <div class="container-card-category ">
        <img :src="item.image" :alt="item.text">
        <h5>{{item.text}}</h5>
    </div>
</template>

<script>
    export default {
        name: 'CardCategory',
        props: {
            item: Object
        },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .container-card-category {
        height: 200px;
        width: auto;
        margin: 20px 40px;
        display: flex;
        flex-flow: column nowrap;
        justify-content: center;
        align-items: center;
        background-color: rgb(243, 248, 251);

        img {
            width: 80px;
            margin-bottom: 20px;
        }
    }
</style>