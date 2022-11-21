<template>
    <div class="container-plan-component myWrapper">

        <div class="header-plan text-center">
            <h2>Pricing Plans</h2>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur voluptatem fuga neque nisi voluptas, a soluta eius provident animi repellat.</p>
        </div>

        <div class="container-tabella">
            <TableApp/>
        </div>
        
    </div>
</template>

<script>
import TableApp from './TableApp.vue';

    export default {
    name: "PlanComponent",
    components: { TableApp }
}
</script>

<style lang="scss" scoped>
@import '../../assets/style/general.scss';

    .container-plan-component {
        margin: 100px 0;
    }

</style>