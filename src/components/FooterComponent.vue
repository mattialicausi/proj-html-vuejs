<template>
    <div class="container-footer">
        <div class="row myWrapper d-flex justify-content-center py-5">
       
                <div class="col-3 container-academy">
                    <div>

                        <div class="container-logo">
                            <img class="logo" src="../../public/images/footer-logo-1.png" alt="logo azienda">
                        </div>
                       
                        <ul class="lista-cademy" v-for="(item, index) in isAcademyOptions" :key="index">
                            <li>{{item}}</li>
                        </ul>

                        <div class="container-contact">
                            <i class="fa-solid fa-phone-arrow-down-left"></i>
                            <span>1-677-124-44227</span>
                        </div>

                        <div class="container-contact">
                            <span><i class="fa-solid fa-timer"></i></span>
                            <span>Mon-Sat 8.00-18.00</span>
                        </div>

                    </div> 
                </div>

                <div class="col-3">
                    <div class="container-popular">
                        <ul v-for="(item, index) in popularOptions" :key="index">
                            <li>{{item}}</li>
                        </ul>
                    </div>
                   
                </div>

                <div class="col-3">
                    <div class="container-support">
                        <ul v-for="(item, index) in supportOptions" :key="index">
                            <li>{{item}}</li>
                        </ul>
                    </div> 
                </div>

                <div class="col-3">
                    <img src="../../public/images/footer-img-1.png" alt="image of world">
                </div>

        </div>


        <div class="container-copyright py-5 myWrapper row d-flex justify-content-between align items-center row">
            <div class="col-4 d-flex align-items-center">
                <span> 2022 @Mattia by Boolean</span>
            </div>

            

            <div class="col-4 col-sm-8 d-flex justify-content-between align items-center">
                <div class=" d-flex align-items-center">
                    CALL +44224455
                </div>

                <div class="text-uppercase d-flex align-items-center col-4">
                    follow us
                </div>

                <div>
                    <i class="fa-brands fa-twitter"></i>
                </div>

                <div class="mx-2">
                    <i class="fa-brands fa-instagram"></i>
                </div>

                <div>
                    <i class="fa-brands fa-facebook-f"></i>
                </div>  
            </div>
        </div>

    </div>
</template>

<script>

    export default {
    name: "FooterComponent",

    data() {
        return {
            isAcademyOptions: [
                'Providing Life Changing',
                'Experiences Through',
                'Education. Class That Fit Your',
                'Busy Life. Closer to Home',
            ],

            popularOptions : [
                'Popular Courses',
                'Business English',
                'Preston Marshall',
                'Social Computing',
                'David Sanders',
                'Learn Spanish',
                'Jennie King' 
            ],

            supportOptions: [
                'Support',
                'User dashboard',
                'Contact Us',
                'FAQ',
                'Course Offer',
                'Events' 
            ]
        }
    }
}
</script>

<style lang="scss" scoped>
@import '../assets/style/general.scss';

    .container-footer {
        background-color: rgb(34, 34, 34);
        color: gray; 
    }

    .container-copyright {
        border-top: 1px solid gray;
        color: gray;

        i {
            font-size: 2rem;
        }
    }

    .container-copyright i:hover{
        cursor: pointer;
        color: rgb(101, 195, 249);
        transition: color linear 500ms;
    }

    img {
        width: 100%;
    }

    .container-logo {
        width: 150px;
        margin-left: 32px;
        margin-bottom: 20px;
    }
    .logo {
        width: 100%;
        height: 100%;
    }

    .container-academy {
       

        .icon {
            color: white;
            font-size: 2rem;
        }
    }

    ul li:hover {
        cursor: pointer;
        color: rgb(101, 195, 249);
    }

    .container-footer ul{
        list-style: none;
    }

    .container-contact {
        padding-left: 32px;
    }

     ul:first-child li{
        font-size: 1.2rem;
        color: white;
    }

    .bordogrigio {
        border: 1px solid gray;
    }

</style>