<template>

   <section class="section-category d-flex myWrapper">
        <div class="col-2" v-for="(item, index) in categoryOptions" :key="item.index">
            <CardCategory :item="item"/>
        </div>
   </section>

   <section class="section-home-tutoring">
        <HomeTutoring/>
   </section>

   <section class="section-empowering myWrapper">
        <EmpoweringComponent/>
   </section>

   <section class="section-testimonials">
        <TestimonialsComponent/>
   </section>
       
   <section class="section-learning">
        <LearningComponent />
   </section>
</template>

<script>
import CardCategory from './main_section/CardCategory.vue';
import EmpoweringComponent from './main_section/EmpoweringComponent.vue';
import HomeTutoring from './main_section/HomeTutoring.vue';
import TestimonialsComponent from './main_section/TestimonialsComponent.vue';
import LearningComponent from './main_section/LearningComponent.vue';

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
    LearningComponent
}
}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';

    .section-learning {
        border-bottom: 1px solid gray;
    }

</style>