<template>
    <div class="container-cards-learning">
        <h3>{{rightOptions[i].title}}</h3>
        <p>{{rightOptions[i].description}}</p>

        <div class="container-checks">
            <div><i class="fa-solid fa-check"></i> {{rightOptions[i].check1}}</div>
            <div><i class="fa-solid fa-check"></i> {{rightOptions[i].check2}}</div>
            <div><i class="fa-solid fa-check"></i> {{rightOptions[i].check3}}</div>
            <div><i class="fa-solid fa-check"></i> {{rightOptions[i].check4}}</div>
        </div>

        <div class="container-img">
            <img :src="rightOptions[i].image" :alt="rightOptions.title">
        </div>

    </div>
</template>

<script>
    export default {
        name: 'LearningPossibilities',
        props: {
            rightOptions : Object,
            item: Object,
            i: Number
        },
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .container-cards-learning{
        width: 800px;
        margin-left: 100px;
        word-wrap: break-word;
        position: absolute;
        left: 20px;
        top: 50px;
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
        right: 0;
        width: 150px;

        img {
            width: 100%;
        }
    }
</style>