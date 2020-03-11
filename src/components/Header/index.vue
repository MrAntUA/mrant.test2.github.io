<template>
    <div class="gradiented-wrapp">
        <div class="custom-container">
            <header class="main-header container">
                <nav class="main-menu">
                    <a href="#" class="logo" @click="goTo('/')">
                        <img src="@/assets/img/logo.png" alt="logo">
                    </a>

                    <a href="#">Monitoring</a>
                    <a href="#">Eligibility</a>
                    <a href="#">Offer building</a>
                    <a href="#">Partnership</a>
                </nav>

                <nav>
                    <a href="#" @click="goTo('/about')">About</a>
                    <a href="#" @click="goTo('/contact')">Contact</a>
                </nav>
            </header>
        </div>
    </div>
</template>

<script>
    import './style.scss';
    
    export default {
        name: "Header",

        components: {},
        
        data() {
            return {};
        },

        methods: {
            goTo(route){
                this.$router.push({ path: route })
            }
        }
    };
</script>
