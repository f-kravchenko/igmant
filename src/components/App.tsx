import React from 'react';
import { Route, Routes, Link } from 'react-router-dom';
import '../styles/App.css';
import Contact from './Contact';
import Home from './Home';
import About from './About';
import Services from './Services';
import Logo from '../images/logo.png';

class App extends React.Component<any, any> {
    render() {
        return (
            <div className="App hero is-fullheight">
                <div className="hero-body">
                    <div className="container is-fluid">
                        <div className="columns">
                            <div className="column is-narrow vertical-center" style={{ width: '300px' }}>
                                <div>
                                    <Link to="/">
                                        <img src={Logo} alt="Logo" />
                                    </Link>
                                </div>
                                <aside className="menu">
                                    <ul className="menu-list">
                                        <p className="menu-label logo-subtitle">
                                            Kodumasinate remont
                                        </p>
                                        <ul className="menu-list">
                                            <li>
                                                <Link to="/services">
                                                    TEENUSED
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/contact">
                                                    KONTAKT
                                                </Link>
                                            </li>
                                            <li>
                                                <Link to="/about">
                                                    MEIST
                                                </Link>
                                            </li>
                                        </ul>
                                    </ul>
                                </aside>
                            </div>

                            <div className="column">
                                <Routes>
                                    <Route path="/" element={<Home />} />
                                    <Route path="/services" element={<Services />} />
                                    <Route path="/contact" element={<Contact />} />
                                    <Route path="/about" element={<About />} />
                                </Routes>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="hero-foot">
                    <footer className="footer">
                        <div className="content has-text-centered">
                            <p>
                                Igmant OÜ, reg. 10279612, Akadeemia tee 66, Tallinn 12614
                            </p>
                        </div>
                    </footer>
                </div>
            </div>
        );
    }
}

export default App;
