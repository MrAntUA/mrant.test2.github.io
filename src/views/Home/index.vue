<template>
    <main class="main-wrapper">
        <section class="section-1">
            <div class="intro intro-mb">
                <img class="logo" src="@/assets/img/logo.png" alt="logo">

                <h1>End-to-end services in the tendering process</h1>
                <h2>TASC is a company founded in 2004 by experts dealing with Public Institutions and managing
                    institutional projects. TASC’s office is just a few minutes from the European Institutions.
                    <br/>
                    TASC delivers its services throughout all of Europe
                </h2>
            </div>
        </section>

        <section class="section-2 custom-container">
            <h3 class="section-title centered">The end-to-end services in the tendering process</h3>

            <div class="steps">
               
                <div class="steps-wrap">
                     <div class="arrow">
                        <div class="arrow-icon">
                            <v-icon>fa-caret-right</v-icon>
                        </div>
                    </div>

                    <div class="step">
                        <div class="step-content">
                            We find <br/> <span class="solid-text"> Appropriate Tenders for you</span> 
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-content">
                            We asses your<br/><span class="solid-text"> Capability to offer</span>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-content">
                            We assist you <br/> <span class="solid-text"> To Build the offer</span>
                        </div>
                    </div>
                    <div class="step">
                        <div class="step-content">
                            We select you <br/><span class="solid-text">Wright partner</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section bg-section">
            <div class="custom-container">
                <h3 class="section-title">Monitoring</h3>
                <p class="description">Finding tenders has never been so easy with our on-line service <a href="tender-it.com">Tender-It.com</a></p>

                <div class="info-box">
                    <div class="list-wrapper left">
                        
                        <ul>
                            <li>Find tenders in a fast an easy way</li>
                            <li>For local, national & international opportunities</li>
                            <li>With unlimited search profiles</li>
                            <li>At a flexible and low subscription fee</li>
                            <li>Follow your preferred tenders on a personal dashboard</li>
                            <li>Get notified by mail on new tenders and deadlines</li>
                        </ul>
                    </div>

                    <div class="img-wrap">
                        <img src="@/assets/img/search.jpg" alt="tender process">
                    </div>
                </div>

                <div class="subinfo-box">
                    <p class="description">Tender-It is an International public procurement platform. <br/> TASC is the exclusive agent for entities in Belgium, France and Luxembourg</p>
                    <div class="list-wrapper">
                        <ul>
                            <li>Support and help belgian, French and Luxembourger customers</li>
                            <li>Building their search profile</li>
                            <li>Offer complementary tender services</li>
                        </ul>

                        <div class="more-wrap">
                            <a href="https://www.tender-it.com/" class="more"><span>enter our monitoring service</span><i class="fas fa-chevron-right"></i></a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        
        <section class="main-section shape-toright">
            <div class="custom-container">
                <h3 class="section-title">Eligibility</h3>
                <p class="description">We advise on your feasibility and your opportunity to answer the tender</p>

                <div class="info-box">
                    <div class="img-wrap">
                        <img src="@/assets/img/image-1.jpg" alt="tender process">
                    </div>
                    
                    <div class="list-wrapper right">
                        <div class="list-title">TASC actions</div>
                        <ul>
                            <li>Read the complete Call for Tenders documents</li>
                            <li>Select the key information</li>
                            <li>Analyse the selection criteria against your company profile and capacity</li>
                            <li>Gap analysis and recommandation on the tendering strategy</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>

        <section class="main-section bg-section">
            <div class="custom-container">
                <h3 class="section-title">Offer Building</h3>
                <p class="description">From the thorough analysis of the tender documents until the submission of your offer.</p>
                
                <div class="info-box">
                    <div class="list-wrapper left">
                        <div class="list-title">TASC actions</div>
                        <ul>
                            <li>Analyse calls for tenders’ documents</li>
                            <li>Structure tenders’ response documents</li>
                            <li>List of required administrative documents</li>
                            <li>Create bid planning</li>
                            <li>Identify the desired requirements</li>
                            <li>Identify the key tender success factors</li>
                            <li>Identify complementary skills that are needed</li>
                            <li>Create and negotiate agreements with third parties</li>
                            <li>Complete offer’s layout</li>
                            <li>Completely screen the tender document before submission</li>
                            <li>Deliver offer within the deadline</li>
                        </ul>
                    </div>

                    <div class="img-wrap">
                        <img src="@/assets/img/image-2.jpg" alt="tender process">
                    </div>
                </div>
            </div>
        </section>
        
        <section class="main-section shape-toleft">
            <div class="custom-container">
                <h3 class="section-title">Partnership</h3>
                <p class="description">You may need complementary resources for specific tenders. We act as both an architect enabling partnerships to come together, and as an independent referee defining the rights, obligations, responsibilities and accountability of each partner.</p>

                <div class="info-box">
                    <div class="img-wrap">
                        <img src="@/assets/img/image-3.jpg" alt="tender process">
                    </div>

                    <div class="list-wrapper right">
                        <div class="list-title">TASC actions</div>

                        <ul>
                            <li>Identify the right partner(s) for a perfect Consortium</li>
                            <li>Build network of similar (or not) identities to cover larger territory</li>
                            <li>Define roles and responsibilities of all parties involved.</li>
                            <li>We draw up the key documents/agreements</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    </main>
</template>

<script>
    import './style.scss';

    export default {
        name: "Home",

        components: {},
        
        data() {
            return {};
        },

        methods: {}
    };
</script>
