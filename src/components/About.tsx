import React from "react";

const About = () => {
    return (
        <section className="section" id="about">
            <div className="container">
                <div className="columns">
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <h3 className="title is-5">Repair Services</h3>
                                <p>Starting at $50</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <h3 className="title is-5">Maintenance Services</h3>
                                <p>Starting at $75</p>
                            </div>
                        </div>
                    </div>
                    <div className="column">
                        <div className="card">
                            <div className="card-content">
                                <h3 className="title is-5">Installation Services</h3>
                                <p>Starting at $100</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;