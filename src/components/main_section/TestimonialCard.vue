<template>
    <div class="card-testimonial">
        <div class="text-center">
            <div class="container-img">
                <img :src="cardTestimonial[i].image" :alt="cardTestimonial[i].name">
            </div>
            <p>{{cardTestimonial[i].description}}</p>
            <h4>{{cardTestimonial[i].name}}</h4>
            <div class="text-uppercase">{{cardTestimonial[i].role}}</div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TestimonialCard',
        props: {
            cardTestimonial: Object,
            i: Number
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';


    .container-img {
            width: 200px;
            margin: 0 auto;

            img {
                width: 100%;
            }
        }

    p {
            padding: 10px 0;
        }

</style>