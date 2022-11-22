<template>
    <div class="container-popular-courses myWrapper position-relative">

        <div class="header-section">
            <h2>Popular Online Courses</h2>
            <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Recusandae labore aspernatur nobis voluptates at asperiores distinctio reprehenderit autem architecto minima. Lorem ipsum dolor sit amet consectetur, adipisicing elit. Possimus, cumque!</p>
        </div>

        <div class="row">
            <div class="col-4" v-for="(items, index) in popularOptions" :key="index">
                <CardCourses :items="items" :i="index" :popularOptions="popularOptions"/>
            </div>
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
                        page1: [
                            {
                                image: '../../../public/images/course-1-f-img.jpg',
                                title: 'Android Developer',
                                subtitle: 'David Sanders',
                                status: 'free',
                                description: 'Lorem ipsum dolor sit a tenetur deleniti iusto nam perferendis es pra nesciunt.',
                                type: 'programming'
                            },
                            {
                                image: '../../../public/images/course-2-f-img.jpg',
                                title: 'Web Designing',
                                subtitle: 'Jennifer Powell',
                                status: 'free',
                                description: 'Lorem ipsum dolor sititi iusto nam perferendis esse praesentium fuga nesciunt.',
                                type: 'programming'
                            },
                            {
                                image: '../../../public/images/course-3-f-img.jpg',
                                title: 'Financial Modeling',
                                subtitle: 'Edward Bowman',
                                status: '$20',
                                description: 'Lorem ipsum dolor m perferendis esse praesentium fuga elccsc igendi nesciunt.',
                                type: 'business'
                            },
                            ],
                     },
                     {
                    page2: [
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
                            ],   
                     },
                     {
                    page3: [
                            {
                                image: '../../../public/images/course-4-f-img.jpg',
                                title: 'Android Developer',
                                subtitle: 'David Sanders',
                                status: 'free',
                                description: 'Lorem ipsum dolor sit a tenetur deleniti iusto nam perferendis esse praesentium fuga eligendi nesciunt.',
                                type: 'programming'
                            },
                            {
                                image: '../../../public/images/course-10-f-img.jpg',
                                title: 'Web Designing',
                                subtitle: 'Jennifer Powell',
                                status: 'free',
                                description: 'Lorem ipsum dolor sititi iusto nam perferendis esse praesentium fuga eligendi nesciunt.',
                                type: 'programming'
                            },
                            {
                                image: '../../../public/images/course-11-f-img.jpg',
                                title: 'Financial Modeling',
                                subtitle: 'Edward Bowman',
                                status: '$20',
                                description: 'Lorem ipsum dolor m perferendis esse praesentium fuga eligendi nesciunt.',
                                type: 'business'
                            },
                            ]  
                     }
                        
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

    .container-popular-courses {
        padding-bottom: 100px;

    }
    .header-section {
        text-align: center;
        margin-top: 50px;

        p {
            padding: 20px 0;
        }
    }


    .container-indici {
        position: absolute;
        bottom: 20px;
        left: 40%;
        right: 40%;
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