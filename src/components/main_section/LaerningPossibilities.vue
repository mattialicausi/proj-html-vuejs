<template>
    <div class="container-cards-learning" v-if="item.show">
        <h3>{{item.title}}</h3>
        <p>{{item.description}}</p>

        <div class="container-checks">
            <div><i class="fa-solid fa-check"></i> {{item.check1}}</div>
            <div><i class="fa-solid fa-check"></i> {{item.check2}}</div>
            <div><i class="fa-solid fa-check"></i> {{item.check3}}</div>
            <div><i class="fa-solid fa-check"></i> {{item.check4}}</div>
        </div>

        <div class="container-img">
            <img :src="item.image" :alt="item.title">
        </div>

    </div>
</template>

<script>
    export default {
        name: 'LearningPossibilities',
        props: {
            item: Object,
        },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .container-cards-learning{
        width: 800px;
        margin-left: 100px;
        word-wrap: break-word;
    }
    .container-checks{
        div {
            padding: 10px 0;
            color: gray;
        }

        i{
            color: rgb(101, 195, 249);
        }
    }

    p {
        color: gray;
        padding: 10px 0;
    }

    .container-img {
        position: absolute;
        bottom: 20px;
        right: 200px;
        width: 150px;

        img {
            width: 100%;
        }
    }
</style>