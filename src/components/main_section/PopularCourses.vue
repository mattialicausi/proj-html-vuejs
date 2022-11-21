<template>
    <div class="container-popular-courses myWrapper">

        <div class="header-section">
            <h2>Popular Online Courses</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae labore aspernatur nobis voluptates at asperiores distinctio reprehenderit autem architecto minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, cumque!</p>
        </div>

        <div class="row">
            <div class="col-4 g-4" v-for="(item, index) in popularOptions" :key="index">
                <CardCourses :item="item"/>
            </div>
        </div>

    </div>
</template>

<script>
import CardCourses from '../main_section/CardCourses.vue';

    export default {
        name: 'PopularCourses',

        components: {
            CardCourses,
        },

        data() {
            return {
                popularOptions: [
                    {
                        image: '../../../public/images/course-5-f-img.jpg',
                        title: 'Android Developer',
                        subtitle: 'David Sanders',
                        status: 'free',
                        description: 'Lorem ipsum dolor sit a tenetur deleniti iusto nam perferendis esse praesentium fuga eligendi nesciunt.',
                        type: 'programming'
                    },
                    {
                        image: '../../../public/images/course-6-f-img.jpg',
                        title: 'Web Designing',
                        subtitle: 'Jennifer Powell',
                        status: 'free',
                        description: 'Lorem ipsum dolor sititi iusto nam perferendis esse praesentium fuga eligendi nesciunt.',
                        type: 'programming'
                    },
                    {
                        image: '../../../public/images/blog-post-2.jpg',
                        title: 'Financial Modeling',
                        subtitle: 'Edward Bowman',
                        status: '$20',
                        description: 'Lorem ipsum dolor m perferendis esse praesentium fuga eligendi nesciunt.',
                        type: 'business'
                    },
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .container-popular-courses {
        padding-bottom: 100px;
        position: relative;
    }
    .header-section {
        text-align: center;
        margin-top: 50px;

        p {
            padding: 20px 0;
        }
    }

</style>