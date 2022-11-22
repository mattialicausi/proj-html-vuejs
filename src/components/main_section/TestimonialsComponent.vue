<template>
    <div class="container-section-testimonials h-100 position-relative">
        <div class="myWrapper content" v-for="(item, index) in cardTestimonial" :key="index">
            <TestimonialCard :cardTestimonial="cardTestimonial" :i="index" :class="index === activeIndex ? '' : 'd-none'"/>
        </div>

        <div class="container-indici d-flex align-items-center">
            <div  v-for="(item, index) in indiciLista" :key="index">
                <div class="indice mx-2" @click="getActive(index)">
                    <div :class="index === activeIndex ? 'selezionato': ''">{{indiciLista.index}}</div>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import TestimonialCard from './TestimonialCard.vue';

    export default {
    name: "TestimonialsComponent",
    components: { TestimonialCard },

    data () {
        return {
            cardTestimonial: [
                {
                    image: '../../../public/images/testimonials-standard-1.png',
                    description: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores iure voluptatem aliquam maxime expedita natus labore perspiciatis harum placeat. Praesentium, a quidem voluptates provident beatae facilis possimus deleniti modi alias! Lorem ipsum dolor sit amet consectetur adipisicing elit repellat"',
                    name: 'Anne Diaw',
                    role: 'teacher'
                },
                {
                    image: '../../../public/images/testimonials-standard-2.png',
                    description: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores iure voluptatemus labore perspiciatis harum placeat. Praesentium, a quidem voluptates provident beatae facilis possimus deleniti modi alias! Lorem ipsum dolor sit amet consectetur adipisicing elit repellat"',
                    name: 'joan Collins',
                    role: 'student'
                },
                {
                    image: '../../../public/images/testimonials-standard-3.png',
                    description: '"Lorem ipsum dolor, sit amet consectetur adipisicing elit. Maiores iure voluptatem aliquam maxime expedita natus labore iatis harum placeat. Praesentium, a quidem voluptates provident beatae facilis possimus deleniti modi alias! Lorem ipsum dolor sit amet consectetur adipisicing elit repellat"',
                    name: 'Joseph Stuarth',
                    role: 'developer'
                },
            ],

            indiciLista: [
                {
                    selezionato: true
                },
                {
                    selezionato: false
                },
                {
                    selezionato: false
                },
            ],

            activeIndex: 1,

        }
    },
        methods: {
            getActive(i) {
                this.activeIndex = i;
                console.log('click');
                console.log(this.activeIndex);
            }
        }
        
    
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
        position: relative;
    }

    .container-indici {
        position: absolute;
        bottom: 20px;
        right: 40%;
        left: 40%;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .content {
        position: absolute;
        top: 100px;
        left:100px;
        right: 100px;
        display: flex;
        justify-content: space-around;
        align-items: center;
    }

    .indice {
        width: 20px;
        height: 20px;
        border-radius: 50%;
        background-color: gray;
        display: flex;
        align-items: center;
        justify-content: center;
        border: 1px solid white;


        .selezionato {
            width: 10px;
            height: 10px;
            border-radius: 50%;
            background-color: white;
        }

        .indice:hover {
            cursor: pointer;
        }
    }


</style>