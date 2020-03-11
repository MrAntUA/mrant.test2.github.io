<template>
    <div class="gradiented-wrapp">
        <div class="custom-container">
            <footer class="main-footer">
                <div class="logo-col">
                    <a href="#" class="logo">
                        <img src="@/assets/img/logo.png" alt="logo">
                    </a>
                </div>
                
                <div class="custom-row">
                    <div class="custom-col">
                        <h3>Services</h3>

                        <ul>
                            <li>Monitoring</li>
                            <li>Eligibility</li>
                            <li>Offer building</li>
                            <li>Partnership</li>
                            <li @click="goTo('/about')"><a href="#">About</a></li>
                            <li @click="goTo('/contact')"><a href="#">Contact</a></li>
                        </ul>
                    </div>
                    <div class="custom-col">
                        <h3>Social</h3>

                        <ul>
                            <li><a href="#">
                                <i class="fab fa-linkedin"></i>
                                <span>Linkedin</span>
                            </a></li>
                            <li><a href="#">
                                <i class="fab fa-twitter"></i>
                                <span>Twitter</span>
                            </a></li>
                            <li><a href="#">
                                <i class="fab fa-facebook"></i>
                                <span>Facebook</span>
                            </a></li>
                        </ul>
                    </div>
                    <div class="custom-col">
                        <h3 class="solid-text fz16">Euro TASC Consulting sprl/bvba</h3>

                        <ul>
                            <li>103 Boulevard Louis Schmidtlaan</li>
                            <li>1040 Brussels – Belgium</li>
                            <li><a href="mailto:info@eurotasc.com">info@eurotasc.com</a></li>
                            <li>N° entr BE 0865 451 816</li>
                        </ul>
                    </div>
                </div>
            </footer>
        </div>
    </div>
</template>

<script>
    import './style.scss';
    
    export default {
        name: "Footer",

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
