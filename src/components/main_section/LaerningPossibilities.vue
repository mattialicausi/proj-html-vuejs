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
        width: 400px;
        margin-left: 100px;
        word-wrap: break-word;
        margin-top: 30px;
        position: absolute;
        left: 5%;
        top: 0;
    }
    .container-checks{
        div {
            padding: 10px 0;
            color: gray;
        }

        i{
            color: #045d8c;
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

    @media (min-width: 768px) {
        .container-cards-learning{
            width: 700px;
      
        }
    }
</style>