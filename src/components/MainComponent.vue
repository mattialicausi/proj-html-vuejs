<template>
   <section class="section-category d-flex">
        <div class="col-2" v-for="(item, index) in categoryOptions" :key="item.index">
            <CardCategory :item="item"/>
        </div>
   </section>
</template>

<script>
import CardCategory from './header_section/CardCategory.vue';

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
    components: { CardCategory }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';

</style>