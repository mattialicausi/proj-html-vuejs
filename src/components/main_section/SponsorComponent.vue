<template>
    <div class="container-sponsor myWrapper">
        <div class="row sponsor">
            <div class="col-3" v-for="(item, index) in sponsorOptions" :key="index">
                <img :src="item" alt="logo sponsor">
            </div>

        </div>
    </div>
</template>

<script>
    export default {
        name: 'SponsorComponent',

        data() {
            return {
                sponsorOptions: [
                    '../../../public/images/h5-client-5.png',
                    '../../../public/images/h5-client-1.png',
                    '../../../public/images/h5-client-2-h.png',
                    '../../../public/images/h5-client-3.png',
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .sponsor {
        margin: 100px 0;
    }

    .sponsor div:hover {
        cursor: pointer;
    }

</style>