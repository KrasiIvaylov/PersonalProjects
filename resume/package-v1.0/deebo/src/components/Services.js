import React from 'react';

export default function Services() {
    return (
        <>
            {/* Section Services */}
            <div id="services" className="section_services">
                <div className="container">
                    <div className="services_wrapper">
                        <div className="services_title">
                            <h3>Amazing Services</h3>
                        </div>
                        <div className="services_content">
                            <div className="service_direct">
                                <ul>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{ "backgroundImage": "url(img/service/550-300.jpg)" }}></div>
                                                    <img src="img/thumb/square2.jpg" alt="" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Websites &amp; platforms</h2>
                                                <p>Build and deployment of SPA and Web applications</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{ "backgroundImage": "url(img/service/maxresdefault.jpg)" }}></div>
                                                    <img src="img/thumb/square2.jpg" alt="maxresdefault.jpg" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Back - end applications</h2>
                                                <p>Supporting front-end user services, and interfaces with any required resources.</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{ "backgroundImage": "url(img/service/DB.jpg)" }}></div>
                                                    <img src="img/thumb/square2.jpg" alt="DB.jpg" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Database Management</h2>
                                                <p>Knowledge in db management with SQL</p>
                                            </div>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="direct_wrapper">
                                            <div className="service_direct_left_bar">
                                                <div className="img_wrapper">
                                                    <div className="abs_img" style={{ "backgroundImage": "url(img/service/design.jpg)" }}></div>
                                                    <img src="img/thumb/square2.jpg" alt="design.jpg" />
                                                </div>
                                            </div>
                                            <div className="service_direct_right_bar">
                                                <h2>Design conspect</h2>
                                                <p>Design of web pages</p>
                                            </div>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* /Section Services */}
        </>
    );
}
