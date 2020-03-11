<template>
    <main class="main-wrapper about">
        <section class="section-1">
            <div class="intro">
                <h1>About TASC</h1>
            </div>
        </section>

        <section class="main-section bg-section">
            <div class="custom-container">
                <h3 class="section-title centered">TASC’s values</h3>

                <div class="cases">
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-lock</v-icon></div>
                        <p>Confidentiality</p>
                    </div>
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-tasks</v-icon></div>
                        <p>Integrity</p>
                    </div>
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-search</v-icon></div>
                        <p>Attentiveness</p>
                    </div>
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-handshake</v-icon></div>
                        <p>Commitment</p>
                    </div>
                    <div class="case">
                        <div class="case-icon"><v-icon>fa-trophy</v-icon></div>
                        <p>Guaranteed validity and <br/> soundness of tender</p>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section">
            <div class="custom-container">
                <h3 class="section-title centered">TASC’s Strategy</h3>

                <ul class="strategy">
                    <li><span>We assess your entity potential to access the Institutional market</span></li>
                    <li><span>We assess your competitive environment in the market</span></li>
                    <li><span>We review previous tenders to determine entities already active in your market</span></li>
                    <li><span>We check the real market-opening to your company</span></li>
                    <li><span>We review the documents necessary for institutional tender</span></li>
                    <li><span>We advise you about required evolutions for your business structure and network</span></li>
                    <li><span>We suggest third party partnerships to work with</span></li>
                </ul>
            </div>
        </section>

        <section class="main-section">
            <div class="custom-container">
                <h3 class="section-title centered">They trust us</h3>

                <carousel class="testimonials" :perPageCustom="[[320, 1], [1024, 2]]">
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">“For some years now, TASC has helped us progress toward a better understanding of European
                                markets. They allowed us to gain efficiency in the analysis of the calls for tenders and to evolve
                                into selecting calls we have won.”</div>
                            <div class="slide-author">Michel Culot, CEO of VO Group</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">“TASC has established a full set of company methodology material that accompanies each offer.
                                Their knowledge and network have allowed us to benefit from the most adequate partnerships
                                meeting the selection criteria outlined in the call for tender specifications.”</div>
                            <div class="slide-author">Bruno Théry, President of Conceptexpo Group</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">“TASC has always been reliable and professional. Our trust in Euro TASC Consulting is
                                immense and we highly recommend their services.”</div>
                            <div class="slide-author">Jacques Van Leemput, Director of IGEP</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">“ TASC has an outstanding understanding of the type of consortium partners needed in order to
                                win a tender and bridges between new Partners. Due to their excellent communication and
                                organizational skills, they ensures a close, smooth and professional follow up of the whole
                                tendering process until the delivery.”</div>
                            <div class="slide-author">Bernhard von Mach, General Manager of PRACSIS</div>
                        </div>
                    </slide>
                    <slide>
                        <div class="slide-wrapp">
                            <div class="slide-text">“With TASC, we made the bet to turn to a more experienced team to prepare the offers and
                                advise the bidders. TASC fully understood our needs. They have become more dedicated
                                partners than consultants. The enrichment was ideal, in-depth knowledge of the environment of
                                the bidders, seniority, ability to adapt to our specificities. In short, tailor-made support, just the
                                opposite of the usual ready-to-wear from large consulting firms.”;</div>
                            <div class="slide-author">Philippe Massart, Sibelga Communication Director</div>
                        </div>
                    </slide>
                </carousel>
            </div>
        </section>

    </main>
</template>

<script>
    import { Carousel, Slide } from 'vue-carousel';

    import './style.scss';
    
    export default {
        name: "About",

        components: {Carousel, Slide},

        data() {
            return {
                
            };
        },

        methods: {}
    };
</script>
