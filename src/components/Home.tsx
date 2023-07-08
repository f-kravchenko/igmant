import React from "react";
import WMImage1 from '../images/0_1.png';
import WMImage2 from '../images/0_2.png';
import WMImage3 from '../images/0_3.png';
import WMImage7 from '../images/0_7.png';
import {Link} from "react-router-dom";

const Home = () => {
    return (
        <section className="section">
            <div className="container">
                <div className="columns">
                    <div className="column vertical-center">
                        <div className="card">
                            <div className="card-image">
                                <Link to="/services">
                                    <figure className="image">
                                        <img src={WMImage2} />
                                    </figure>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column vertical-center">
                        <div className="card">
                            <div className="card-image">
                                <Link to="/services">
                                    <figure className="image">
                                        <img src={WMImage3} />
                                    </figure>
                                </Link>
                            </div>
                        </div>
                    </div>
                    <div className="column vertical-center">
                        <div className="card">
                            <div className="card-image">
                                <Link to="/services">
                                    <figure className="image">
                                        <img src={WMImage7} />
                                    </figure>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Home;

