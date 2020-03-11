<template>
    <main class="main-wrapper">
        <div class="map-wrapp">
            <LMap :zoom="zoom" :center="center" class="map">
                <LTileLayer :url="url" :attribution="attribution"/>
                <LMarker :lat-lng="center" :icon="icon"></LMarker>
            </LMap>
        </div>

        <div class="main-section bg-section contact-wrapp">
            <div class="contact-container">
                <h3 class="section-title">Contact</h3>

                <div class="contact-form">
                    <form>
                        <v-text-field label="First Name"></v-text-field>
                        <v-text-field label="Last Name"></v-text-field>
                        <v-text-field label="E-mail"></v-text-field>
                        <v-btn color="#0190e3">Send</v-btn>
                    </form>
                    
                    <div class="contact-info">
                        <div class="call-block">
                            <div class="header">
                                Call us now at <a href="tel:+32 (0)496 127 327">+32 (0)496 127 327</a>
                            </div>
                            
                            <div class="text">
                                or fill in the form and we will contact you immediately.
                            </div>
                        </div>

                        <div class="contact-block">
                            <div class="header">
                                Head Office
                            </div>
                            <div class="label">Euro TASC Consulting sprl/bvba</div>
                            <div class="info">
                                103 Boulevard Louis Schmidtlaan <br/>
                                1040 Brussels – Belgium <br/>
                                info@eurotasc.com <br/>
                                N° entr BE 0865 451 816 
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </main>
</template>

<script>
    import { latLng, icon } from "leaflet";
    import { LMap, LTileLayer, LMarker } from 'vue2-leaflet';
    import 'leaflet/dist/leaflet.css';

    import './style.scss';
    
    export default {
        name: "Contact",

        components: { LMap, LTileLayer, LMarker },
        
        data() {
            return {
                center: latLng(52.159000, 4.491145),
                zoom: 16,
                url: 'https://tiles.stadiamaps.com/tiles/alidade_smooth/{z}/{x}/{y}{r}.png',
                attribution: '&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors',
                icon: icon({
                    iconUrl: "static/images/marker.png",
                    iconSize: [32, 37],
                    iconAnchor: [16, 37]
                }),
            };
        },

        beforeCreate(){
            
        },

        methods: {}
    };
</script>