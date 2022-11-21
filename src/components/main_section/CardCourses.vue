<template>
    <div class="card-courses rounded-2">
        <div class="container-img">
            <img :src="item.image" :alt="item.title">
        </div>
        <div class="header-card">
            <div class="d-flex align-items-center justify-content-between mt-2">
                <h4>{{item.title}}</h4>
                <div class="text-uppercase button rounded-3">{{item.status}}</div>
            </div>
            
            <div class="subtitle cgray">{{item.subtitle}}</div>

            <p class="cgray">{{item.description}}</p>

            <div class="d-flex align-items-center cgray">
                <div class="d-flex align-items-center">
                    <i class="fa-solid fa-user"></i>
                    <span class="px-2">1</span>
                </div>

                <div class="d-flex align-items-center px-4">
                    <i class="fa-solid fa-tag"></i>
                    <span class="px-2">{{item.type}}</span>
                </div>
            </div>

        </div>
    
        <div class="container-indici d-flex">
            <div class="indici d-flex align-items-center justify-content-center"><div></div></div>
            <div class="indici d-flex align-items-center justify-content-center mx-2"><div class="selezionato"></div></div>
            <div class="indici d-flex align-items-center justify-content-center"><div></div></div>
        </div>
    </div>
</template>

<script>
    export default {
        name: 'CardCourses',

        props: {
            item: Object
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .header-card {
        flex-flow: column nowrap;
    }
    .subtitle{
        color: gray;
    }

    .button {
        padding: 5px;
    }

    .container-img {
        width: 100%;
        height: 300px;

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

    .container-indici {
        position: absolute;
        bottom: 20px;
        left: 47%;

        .indici {
            height: 20px;
            width: 20px;
            background-color:  rgba(101, 195, 249, 0.2);
            border-radius: 50%;
            border: 1px solid  rgb(101, 195, 249);
        }

        .indici:hover {
            cursor: pointer;
        }

        .selezionato {
            height: 10px;
            width: 10px;
            background-color: rgb(101, 195, 249);
            border-radius: 50%;
        }
    }
</style>