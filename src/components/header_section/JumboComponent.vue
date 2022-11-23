<template>
    <div class="myWrapper ">
        <div class="container-info-jumbo text-center">
            <h1 class="title-jumbo">Contemporary Ideas</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Excepturi deserunt harum est tenetur corporis, dolorum quas pariatur voluptate non consequuntur autem nesciunt commodi ullam in error mollitia?</p>
            <button class="myBTN text-uppercase">Register now</button>
        </div>
    </div>


</template>

<script>
    export default {
        name: 'JumboComponent',

    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .myBTN {
        background-color: rgb(101, 195, 249);
        padding: 10px;
        color: white;
        border: none;
    }

    .title-jumbo {
        font-size: 5rem;
    }

    p {
        word-wrap: break-word;
    }

    .container-info-jumbo{
        max-width: 80%;
        margin: 0 auto;
        line-height: 2rem;
    }

</style>