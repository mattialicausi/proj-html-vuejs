<template>
    <div class="container-section-learning myWrapper d-flex">
        <div class="left-learning">
            <div class="container-title col-4" v-for="(item, index) in leftOptions" :key="index" :class="index === activeIndex ? 'select' : ''" @click="changeWindow(index)">
                <div class="title">{{item}}</div>
            </div>
        </div>

        <div class="right-learning position-relative" v-for="(item, index) in rightOptions" :key="index">
            <LearningPossibilities :item="item" :i="index" :rightOptions="rightOptions"  :class="index === activeIndex ? '' : 'd-none'"/>
        </div>
    </div>
</template>

<script>
import LearningPossibilities from '../main_section/LaerningPossibilities.vue';

    export default {
        name: 'LearningComponent',
        components: {
            LearningPossibilities
        },

        data() {
            return {
                leftOptions: [
                    'What We Do',
                    'Degree Programme',
                    'Chareer Archievements',
                    'Personal Managment',
                    'Steps To Success',
                    'Knowledge Transfer',
                ],

                activeIndex: 0,

                rightOptions: [
                    {
                        title: 'Learning Possibilities',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit doloremque rerum sint omnis repudiandae, quis hic minus alias assumenda lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet!.',
                        check1: 'We enrich lives through learning.',
                        check2: 'Maximizing potential through individual attention.',
                        check3: 'The trusted name for specialized training',
                        check4: 'People teach. People learn. This is where they connect.',
                        image: '../../../public/images/h12-tabs-icon-1.png',
                        show: true,
                        id: '1'
                    },
                    {
                        title: 'Degree Programme',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit doloremque rerum sint omnis repudiandae, quis hic minus alias assumenda lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet!.',
                        check1: 'We enrich lives through learning.',
                        check2: 'Maximizing potential through individual attention.',
                        check3: 'The trusted name for specialized training',
                        check4: 'People teach. People learn. This is where they connect.',
                        image: '../../../public/images/h12-tabs-icon-2.png',
                        show: false,
                        id: '2'

                    },
                    {
                        title: 'Chareer Archievements',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit doloremque rerum sint omnis repudiandae, quis hic minus alias assumenda lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet!.',
                        check1: 'We enrich lives through learning.',
                        check2: 'Maximizing potential through individual attention.',
                        check3: 'The trusted name for specialized training',
                        check4: 'People teach. People learn. This is where they connect.',
                        image: '../../../public/images/h12-tabs-icon-3.png',
                        show: false,
                        id: '3'

                    },
                    {
                        title: 'Personal Managment',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit doloremque rerum sint omnis repudiandae, quis hic minus alias assumenda lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet!.',
                        check1: 'We enrich lives through learning.',
                        check2: 'Maximizing potential through individual attention.',
                        check3: 'The trusted name for specialized training',
                        check4: 'People teach. People learn. This is where they connect.',
                        image: '../../../public/images/h12-tabs-icon-4.png',
                        show: false,
                        id: '4'

                    },
                    {
                        title: 'Steps To Success',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit doloremque rerum sint omnis repudiandae, quis hic minus alias assumenda lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet!.',
                        check1: 'We enrich lives through learning.',
                        check2: 'Maximizing potential through individual attention.',
                        check3: 'The trusted name for specialized training',
                        check4: 'People teach. People learn. This is where they connect.',
                        image: '../../../public/images/h12-tabs-icon-5.png',
                        show: false,
                        id: '5'

                    },
                    {
                        title: 'Knowledge Transfer',
                        description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam odit doloremque rerum sint omnis repudiandae, quis hic minus alias assumenda lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, amet!.',
                        check1: 'We enrich lives through learning.',
                        check2: 'Maximizing potential through individual attention.',
                        check3: 'The trusted name for specialized training',
                        check4: 'People teach. People learn. This is where they connect.',
                        image: '../../../public/images/h12-tabs-icon-6.png',
                        show: false,
                        id: '6'

                    },
                ]
            }
        },
        methods: {
            changeWindow(i) {
                    this.activeIndex = i;
                    //console.log(this.activeIndex)
                    //console.log('click')
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .container-section-learning{
        padding-bottom: 50px;
        margin-left: 20px;
    }
    .left-learning {
        width: 20%;
        margin-top: 30px;
    }

    .container-title{
        border: 1px solid gray;
        color: gray;
        padding: 20px 0;
        width: 200px;

        .title {
            margin-left: 10px;
        }
        
    }

    .container-title:hover {
        background-color: rgb(243, 248, 251);
        color: #045d8c;
        border-left: 10px solid #045d8c;
        cursor: pointer;
    }

    .select {
        background-color: rgb(243, 248, 251);
        color: #045d8c;
        border-left: 10px solid #045d8c;
    }


</style>