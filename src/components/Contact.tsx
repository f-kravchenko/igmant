import React from "react";
import { Map, GoogleApiWrapper, GoogleAPI } from "google-maps-react";

interface GoogleMapWidgetProps {
    google: GoogleAPI;
}

const Contact: React.FC<GoogleMapWidgetProps> = (props) => {
    const { google } = props;
    const location = { lat: 59.437265, lng: 24.745120 };
    const mapStyles = {
        width: "100%",
        height: "400px",
    };

    return (
        <section className="section is-small">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <strong>Tel:</strong> +372 5111059, +372 6775681
                                </div>
                                <div className="content">
                                    <strong>Email:</strong> info@igmant.ee
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <div className="content">
                                    <strong>Address:</strong> Akadeemia tee 66, Tallinn
                                </div>
                                <div className="content">
                                    <strong>Swedbank:</strong> EE792200001120011114
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/*<div className="container margin-top is-large">*/}
            {/*    <h2 className="title is-4">Our Location</h2>*/}
            {/*    <Map*/}
            {/*        google={google}*/}
            {/*        style={mapStyles}*/}
            {/*        initialCenter={location}*/}
            {/*    />*/}
            {/*</div>*/}
        </section>
    );
};

export default GoogleApiWrapper({
    apiKey: "AIzaSyAGS1UM7puKz4hRgJJGvXGM_N-0yxhgS-I",
})(Contact);