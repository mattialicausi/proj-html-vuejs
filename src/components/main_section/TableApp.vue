<template>
    <div class="table-plan">
        <div class="container-table">

            <div class="row table h-100 mb-0">
                <div class="col-3 content px-0 " v-for="(item, index) in headerTable" :key="index">
                        <img class="pricing-plan" :src="item.image" alt="">
                        <h4>{{item.title}}</h4>
                        <div>{{item.price ? item.price : ''}}</div>
                </div>
            </div>

            <div class="row table h-100 my-0">
                <div class="d-flex container-plan" v-for="(item, index) in contentTable" :key="index">
                    <div class="col-3 content-title" v-html="item.title"></div>
                    <div class="col-3 content-table" v-html="item.standard"></div>
                    <div class="col-3 content-table"  v-html="item.professional"></div>
                    <div class="col-3 content-table" v-html="item.advanced"></div>
          .      </div>
            </div>

        </div>

        <div class="row table">
            <div class="col-3"><div class="button"></div></div>
            <div class="col-3  d-flex align-items-center justify-content-center  container-btn"><div class="button text-uppercase">get it now</div></div>
            <div class="col-3  d-flex align-items-center justify-content-center  container-btn"><div class="button text-uppercase">get it now</div></div>
            <div class="col-3  d-flex align-items-center justify-content-center  container-btn"><div class="button text-uppercase">get it now</div></div>
            
        </div>
    </div>
</template>

<script>
    export default {
        name: 'TableApp',

        data() {
            return {
                headerTable: [
                    {
                        // image: '',
                        title: 'Save up to 40% by paying weekly',
                        // price: ''
                    },
                    {
                        image: '../../../public/images/h5-custom-icon-7.png',
                        title: 'Standard',
                        price: '$12'
                    },
                    {
                        image: '../../../public/images/h5-custom-icon-8.png',
                        title: 'Professional',
                        price: '$59'
                    },
                    {
                        image: '../../../public/images/h5-custom-icon-9.png',
                        title: 'Advanced',
                        price: '$88'
                    },
                ],

                contentTable: [
                    {
                        title: 'Number of Courses',
                        standard: '2',
                        professional: '4',
                        advanced: '6'
                    },
                    {
                        title: 'Time',
                        standard: '15 Days',
                        professional: '30 Days',
                        advanced: '30 Days'
                    },
                    {
                        title: 'Web Designing',
                        standard: '<i class="fa-solid fa-check"></i>',
                        professional: '<i class="fa-solid fa-check"></i>',
                        advanced: ' <i class="fa-solid fa-check"></i>'
                    },
                    {
                        title: 'Human-Centered Design',
                        standard: '<i class="fa-solid fa-xmark"></i>',
                        professional: ' <i class="fa-solid fa-check"></i>',
                        advanced: ' <i class="fa-solid fa-check"></i>'
                    },
                    {
                        title: 'Basic Marketing',
                        standard: '<i class="fa-solid fa-xmark"></i>',
                        professional: '<i class="fa-solid fa-check"></i>',
                        advanced: ' <i class="fa-solid fa-check"></i>'
                    },
                    {
                        title: 'Python for Everybody',
                        standard: '<i class="fa-solid fa-xmark"></i>',
                        professional: '<i class="fa-solid fa-xmark"></i>',
                        advanced: ' <i class="fa-solid fa-check"></i>'
                    },
                    {
                        title: 'Android Developer',
                        standard: '<i class="fa-solid fa-xmark"></i>',
                        professional: ' <i class="fa-solid fa-check"></i>',
                        advanced: ' <i class="fa-solid fa-check"></i>'
                    },
                    {
                        title: 'Business English',
                        standard: '<i class="fa-solid fa-xmark"></i>',
                        professional: ' <i class="fa-solid fa-xmark"></i>',
                        advanced: ' <i class="fa-solid fa-check"></i>'
                    },

                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .container-table {
        width: 100%;
        
        .table {
            word-wrap: break-word;
            display: flex;
            align-items: center;
            justify-content: center;


            .content {
                border: 1px solid rgb(243, 248, 265);
                height: 150px;
                display: flex;
                flex-flow: column nowrap;
                align-items: center;
                justify-content: center;
            }
        }
    }

    .content-title {
        border: 1px solid rgb(243, 248, 251);
        padding: 10px 5px;

    }

    .content-table {
        border: 1px solid rgb(243, 248, 251);
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 10px;
    }

    .container-plan {
        padding: 0;
        color: gray;
    }

    .container-btn {
        border: 1px solid rgb(243, 248, 251);
        height: 80px;
        background-color: rgb(243, 248, 251);

        .button {
            padding: 10px;
            border: 1px solid rgb(243, 248, 251);
            background-color: white;
        }
    }

    .pricing-plan:hover{
        border-top: 1px solid rgb(101, 195, 249);
        transition: border-top linear 1s;
        cursor: pointer;

    }

    .button:hover {
            background-color: rgb(101, 195, 249);
            cursor: pointer;
            color: white;
            transition: background-color linear 1s;
        }


</style>