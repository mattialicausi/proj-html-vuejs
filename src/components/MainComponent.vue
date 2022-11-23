<template>
    <div class="myContainer">
        <section class="section-category mt-50 row myWrapper justify-content-between">
            <div class="col-2" v-for="(item, index) in categoryOptions" :key="item.index">
                <CardCategory :item="item"/>
            </div>
        </section>

        <section class="section-home-tutoring mt-50">
            <HomeTutoring/>
        </section>

        <section class="section-empowering mt-50 myWrapper">
            <EmpoweringComponent/>
        </section>

        <section class="section-testimonials mt-50">
            <TestimonialsComponent/>
        </section>
        
        <section class="section-learning mt-50">
            <LearningComponent />
        </section>

        <section class="section-popular-courses mt-50">
            <PopularCourses/>
        </section>

        <section class="section-plan mt-50">
            <PlanComponent/>
        </section>

        <section class="section-sponsor mt-50">
            <SponsorComponent/>
        </section>
    </div>


    <div class="container-btn-top" @click="scrollToUp()">
        <i class="fa-solid fa-caret-up"></i>
        <div class="text-uppercase">top</div>
    </div>

</template>

<script>
import CardCategory from './main_section/CardCategory.vue';
import EmpoweringComponent from './main_section/EmpoweringComponent.vue';
import HomeTutoring from './main_section/HomeTutoring.vue';
import TestimonialsComponent from './main_section/TestimonialsComponent.vue';
import LearningComponent from './main_section/LearningComponent.vue';
import PopularCourses from './main_section/PopularCourses.vue';
import PlanComponent from './main_section/PlanComponent.vue';
import SponsorComponent from './main_section/SponsorComponent.vue';

    export default {
    name: "MainComponent",
    data() {
        return {
            categoryOptions: [
                {
                    image: "../../public/images/h5-custom-icon-1.png",
                    text: "Languages"
                },
                {
                    image: "../../public/images/h5-custom-icon-2.png",
                    text: "Software"
                },
                {
                    image: "../../public/images/h5-custom-icon-3.png",
                    text: "Business"
                },
                {
                    image: "../../public/images/h5-custom-icon-4.png",
                    text: "Chemistry"
                },
                {
                    image: "../../public/images/h5-custom-icon-5.png",
                    text: "Science"
                },
                {
                    image: "../../public/images/h5-custom-icon-6.png",
                    text: "DIY&Craft"
                },
            ]
        };
    },
    components: {
        CardCategory,
        HomeTutoring,
        EmpoweringComponent,
        TestimonialsComponent,
        LearningComponent,
        PopularCourses,
        PlanComponent,
        SponsorComponent
    },
    methods : {
        scrollToUp () {
            window.scrollTo(0, 0);
        }
    }
}
</script>

   

<style lang="scss" scoped>
@import '../assets/style/general.scss';

    .myContainer {
        position: relative;

        .container-btn-top{
            position: sticky;
            bottom: 0;
            left: 100%;
            color: white;
            height: 50px;
            width: 50px;
            display: flex;
            flex-flow: column nowrap;
            justify-content: center;
            align-items: center;
            background-color: rgb(101, 195, 249);

            &:hover {
                cursor: pointer;
            }
        }
    }



    .section-popular-courses, .section-plan{
        background-image: url(../../../public/images/page-background-img.png);
        background-size: contain;
    }
    .section-learning {
        border-bottom: 1px solid gray;
    }

    .section-plan {
        border-bottom: 1px solid gray;
    }

    .mt-50 {
        margin-top: 50px;
    }

</style>