import React from "react";
import 'bulma/css/bulma.min.css';

class Navbar extends React.Component<any, any>{
    render() {
        return (
            <nav className="navbar is-dark" role="navigation" aria-label="main navigation">
                <div className="navbar-brand">
                    <a className="navbar-item">
                    </a>

                    <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false"
                       data-target="navbarBasicExample">
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                        <span aria-hidden="true"></span>
                    </a>
                </div>

                <div id="navbarBasicExample" className="navbar-menu">
                    <div className="navbar-start">
                        <a className="navbar-item">
                            Ремонт
                        </a>
                        <a className="navbar-item">
                            Цены
                        </a>
                        <a className="navbar-item">
                            Контакты
                        </a>
                        <a className="navbar-item">
                            О нас
                        </a>
                    </div>
                </div>
            </nav>
        );
    }
}

export default Navbar;