<template>

    <div v-for="(item, l) in items" :key="l">
        <div class="card-courses rounded-2"  :activeIndex="activeIndex" :class="i === activeIndex ? 'd-none' : ''">
            <div class="container-img">
                <img :src="item[i].image">
            </div>
            <div class="header-card">
                <div class="d-flex align-items-center justify-content-between mt-2">
                    <h4>{{item[i].title}}</h4>
                    <div class="text-uppercase button-status rounded-pill" :class="item[i].status === 'free' ? 'bg-1' : 'bg-2'">
                        {{item[i].status}}
                    </div>
                </div>
                
                <div class="subtitle cgray">{{item[i].subtitle}}</div>

                <p class="cgray">{{item[i].description}}</p>

                <div class="d-flex align-items-center cgray">
                    <div class="d-flex align-items-center">
                        <i class="fa-solid fa-user"></i>
                        <span class="px-2">1</span>
                    </div>

                    <div class="d-flex align-items-center px-4">
                        <i class="fa-solid fa-tag"></i>
                        <span class="px-2">{{item[i].type}}</span>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
    export default {
        name: 'CardCourses',

        props: {
            items: Object,
            i: Number,
            popularOptions: Object,
            activeIndex: Number,
            index: Number,
            popularOptions: Object
        },
 
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .header-card {
        flex-flow: column nowrap;
        height: 100%;
    }
    .subtitle{
        color: gray;
    }

    .button-status {
        padding: 3px 5px;
        background-color: yellow;
        color: white;
    }

    .bg-1 {
        background-color: rgb(250, 214, 94);
    }

    .bg-2 {
        background-color: rgb(101, 195, 249);
    }

    .container-img {
        width: 100%;
        height: auto;

        img {
            width: 100%;
            height: 100%;
        }
    }
    .card-courses {
        background-color: white;
        padding: 10px;
    }

    .cgray {
        color: gray;
    }
.titolo {
    font-size: 30px;
    color: black;
}
 
</style>