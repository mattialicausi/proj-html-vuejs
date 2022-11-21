<template>
    <div class="container-section-testimonials h-100">

        <div class="myWrapper text-center">
            <div class="container-img">
                <img src="../../../public/images/testimonials-standard-2.png" alt="image testimonial">
            </div>
            <p>"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores iure voluptatem aliquam maxime expedita natus labore perspiciatis harum placeat. Praesentium, a quidem voluptates provident beatae facilis possimus deleniti modi alias! Lorem ipsum dolor sit amet consectetur adipisicing elit repellat"</p>
            <h4>Joan Collins</h4>
            <div class="text-uppercase">student</div>
        </div>

    </div>
</template>

<script>
    export default {
        name: 'TestimonialsComponent'
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .container-section-testimonials {
        background-image: url(../../../public/images/h5-parallax-img-1.png);
        background-size: cover;
        display: flex;
        flex-direction: column nowrap;
        align-items: center;
        justify-content: center;
        color: white;
        line-height: 2rem;

        p {
            padding: 10px 0;
        }
    }

    .container-img {
        width: 200px;
        margin: 0 auto;

        img {
            width: 100%;
        }
    }

</style>