<template>
    <div>
        <Header/>
        
        <router-view></router-view>

        <Footer/>
    </div>
</template>

<script>
    import Header from '../../components/Header/index.vue';
    import Footer from '../../components/Footer/index.vue';

    import './style.scss';

    export default {
        name: "Layout",

        components: {Header, Footer},

        data() {
            return {};
        },

        methods: {}
    };
</script>
