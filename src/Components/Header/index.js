import React from 'react';
import { Link } from 'react-router-dom';
import LinkComponent from '../LinkComponent';
import Logo from '../../assets/images/Logo.png';

const Header = () => (
    <header
        id="header"
        data-plugin-options='{
            "stickyEnabled": true,
            "stickyEnableOnBoxed": true,
            "stickyEnableOnMobile": true,
            "stickyStartAt": 57,
            "stickySetTop": "-57px",
            "stickyChangeLogo": true
        }'
    >
        <div className="header-body">
            <div className="header-container container">
                <div className="header-row">
                    <div className="header-column">
                        <div className="header-logo">
                            <Link to="/">
                                <img
                                    alt="Porto"
                                    width="111"
                                    height="54"
                                    data-sticky-width="82"
                                    data-sticky-height="40"
                                    data-sticky-top="33"
                                    src={Logo}
                                />
                            </Link>
                        </div>
                    </div>
                    <div className="header-column">
                        <div className="header-row">
                            <div className="header-search hidden-xs">
                                <form id="searchForm" action="page-search-results.html" method="get">
                                    <div className="input-group">
                                        <input
                                            type="text"
                                            className="form-control"
                                            name="q"
                                            id="q"
                                            placeholder="Search..."
                                            required
                                        />
                                        <span className="input-group-btn">
                                            <button className="btn btn-default" type="submit">
                                                <i className="fa fa-search" />
                                            </button>
                                        </span>
                                    </div>
                                </form>
                            </div>
                            <nav className="header-nav-top">
                                <ul className="nav nav-pills">
                                    <li className="hidden-xs">
                                        <a href="about-us.html"><i className="fa fa-angle-right" /> About Us</a>
                                    </li>
                                    <li className="hidden-xs">
                                        <a href="contact-us.html"><i className="fa fa-angle-right" /> Contact Us</a>
                                    </li>
                                    <li>
                                        <span className="ws-nowrap"><i className="fa fa-phone" /> (123) 456-789</span>
                                    </li>
                                </ul>
                            </nav>
                        </div>
                        <div className="header-row">
                            <div className="header-nav">
                                <button
                                    className="btn header-btn-collapse-nav"
                                    data-toggle="collapse"
                                    data-target=".header-nav-main"
                                >
                                    <i className="fa fa-bars" />
                                </button>
                                <ul className="header-social-icons social-icons hidden-xs">
                                    <li className="social-icons-facebook">
                                        <LinkComponent url="http://www.facebook.com/" title="Facebook">
                                            <i className="fa fa-facebook" />
                                        </LinkComponent>
                                    </li>
                                    <li className="social-icons-twitter">
                                        <LinkComponent url="http://www.twitter.com/" title="Twitter">
                                            <i className="fa fa-twitter" />
                                        </LinkComponent>
                                    </li>
                                    <li className="social-icons-linkedin">
                                        <LinkComponent url="http://www.linkedin.com/" title="LinkedIn">
                                            <i className="fa fa-linkedin" />
                                        </LinkComponent>
                                    </li>
                                </ul>
                                <div
                                    className="header-nav-main
                                        header-nav-main-effect-1
                                        header-nav-main-sub-effect-1
                                        collapse"
                                >
                                    <nav>
                                        <ul className="nav nav-pills" id="mainNav">
                                            <li className="dropdown">
                                                <a className="dropdown-toggle" href="index.html">
                                                    Home
                                                </a>
                                            </li>
                                            <li className="dropdown">
                                                <a className="dropdown-toggle" href="index.html">
                                                    Register
                                                </a>
                                            </li>
                                        </ul>
                                    </nav>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </header>
);

export default Header;
