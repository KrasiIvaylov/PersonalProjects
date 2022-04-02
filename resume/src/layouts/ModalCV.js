import React from 'react';
import { SVG_Facebook, SVG_Five_Stars, SVG_Instagram, SVG_Pinterest, SVG_Twitter, SVG_Youtube } from '../../public/svg/svg';

export default function ModalCV({ resumeTrueFalse }) {
    return (
        <>
            {/* Modal CV Card  */}
            <div className="krasiIvaylov_fn_cv">

                {/* CV Closer  */}
                <a onClick={resumeTrueFalse} href="#" className="closer"></a>
                {/* /CV Closer  */}

                {/* CV Inner  */}
                <div className="krasiIvaylov_fn__cv">

                    {/* CV Background  */}
                    <div className="cv__bg"></div>
                    <div className="cv__bg2"></div>
                    {/* /CV Background  */}

                    {/* CV Left Side  */}
                    <div className="cv__header">
                        <div className="in">
                            <div className="avatar">
                                <img src="img/header/1.jpg" alt="" />
                            </div>
                            <h3><span>Krasimir</span> Krasimirov</h3>
                            <p>I’m available for a internship or junior position.</p>
                            <ul className="social">
                                <li>
                                    <a href="https://twitter.com/ivaylovkrasimir" target="_blank" title="twitter.com">
                                        <SVG_Twitter />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.facebook.com/krasiivaylov" target="_blank" title="facebook.com">
                                        <SVG_Facebook />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.instagram.com/ivaylovkrasi" target="_blank" title="instagram.com">
                                        <SVG_Instagram />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://github.com/KrasiIvaylov" target="_blank" title="printerest.com">
                                        <SVG_Pinterest />
                                    </a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/krasimir-ivaylov-3b6800198" target="_blank" title="linkedin.com">
                                        <SVG_Youtube />
                                    </a>
                                </li>
                            </ul>
                        </div>
                    </div>
                    {/* /CV Left Side  */}

                    {/* /CV Content Side  */}
                    <div className="cv__content">


                        {/* CV: Biography Section  */}
                        <section id="cv_biography">
                            <div className="section_title">
                                <h3>Biography</h3>
                            </div>
                            <p>I'm a junior/internship developer with over 2 years of studying experience. I'm from Pernik Bulgaria and i love coding and creating interactive web applications.I'm self motivated, and my adaptability allows me to work in many different environments, in addition to speaking with people from various backgrounds. .</p>
                            <div className="fn_cs_info_items">
                                <ul>
                                    <li><p>Name: <span>Krasimir Krasimirov</span></p></li>
                                    <li><p>Birthday: <span>November 25, 1993</span></p></li>
                                    <li><p>Languages: <span>Bulgarian, English, Russian</span></p></li>
                                    <li><p>Age: <span>28 Years old</span></p></li>
                                    <li><p>Nationality: <span>Bulgarian</span></p></li>
                                    <li><p>Adress: <span>Pernik, Bulgaria</span></p></li>
                                    <li><p>Telegram: <span>Available</span></p></li>
                                    <li><p>Phone: <span><a href="tel:+359883579779">(+359)883579779</a></span></p></li>
                                    <li><p>Email: <span><a href="krasimirivajlov@gmail.com">krasimirivajlov@gmail.com</a></span></p></li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Biography Section  */}


                        {/* CV: Education Section  */}
                        <section id="cv_education">
                            <div className="section_title">
                                <h3>Education</h3>
                            </div>
                            <div className="fn_cs_boxed_list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Software University</h5>

                                            </div>
                                            <h3>Programming Basics</h3>
                                            <p>My first steps in coding, working with conditions and cycles and more. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Software University</h5>
                                            </div>
                                            <h3>Programming Fundamentals</h3>
                                            <p>Foundations of web programming, practical work with lenear data structures, basic understanding of HTML5 & CSS and more </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Software University</h5>

                                            </div>
                                            <h3>Java Advanced</h3>
                                            <p>Principles of OOP, Streams, Files and Directories templating, unit testing nested arrays and more.  </p>
                                        </div>

                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Software University</h5>

                                            </div>
                                            <h3>JavaScript Advanced</h3>
                                            <p>Working with functions, linear data structures, JSON format, DOM tree maniulations, unit testing, REST API, Asynchronous programming, templating, routing and more.   </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Software University</h5>

                                            </div>
                                            <h3>Java DB</h3>
                                            <p>Database and Code first approach, ORM freamework, XML and JSON processing, transactions and relations in the DB, usage of ACID model, creating back-end architecture, </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Software University</h5>

                                            </div>
                                            <h3>Java Web</h3>
                                            <p>HTTP protocol processing, cookies and sessions, generating HTML through requests, Spring data, Spring MVC and deployment, REST services with Spring, Bootstrap. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section>
                        {/* /CV: Education Section  */}


                        {/* CV: Experience Section  */}
                        {/* <section id="cv_experience">
                            <div className="section_title">
                                <h3>Experience</h3>
                            </div>
                            <div className="fn_cs_boxed_list">
                                <ul>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Frenify  LLC</h5>
                                                <span>( 2018 — Today )</span>
                                            </div>
                                            <h3>Sr. Front-end Engineer</h3>
                                            <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Google  LLC</h5>
                                                <span>( 2016 — 2018 )</span>
                                            </div>
                                            <h3>Front-end Developer</h3>
                                            <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        </div>
                                    </li>
                                    <li>
                                        <div className="item">
                                            <div className="item_top">
                                                <h5>Twitter  LLC</h5>
                                                <span>( 2016 — 2011 )</span>
                                            </div>
                                            <h3>Graphic Designer</h3>
                                            <p>Adipisicing Lorem ipsum dolor sit amet, consectetur elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
                                        </div>
                                    </li>
                                </ul>
                            </div>
                        </section> */}
                        {/* /CV: Experience Section  */}


                        {/* CV: Skills Section  */}
                        <section id="scills" className="section_skills wow fadeInRight" data-wow-delay=".7s">
                            <div className="scills_wrapper">
                                <div className="container narrow">
                                    <div className="scills_title">
                                        <h3>Knowledge &amp; Skills</h3>
                                    </div>
                                    <div className="scills_about">
                                    </div>
                                </div>
                                <div className="container narrow2">
                                    <div className="fn_cs_progress_bar">
                                        <div className="progress_item open" data-value={75}>
                                            <div className="item_in">
                                                <h3 className="progress_title">Java</h3>
                                                <span
                                                    className="progress_percent"
                                                    style={{ right: "25%" }}
                                                >
                                                    75%
                                                </span>
                                                <div className="bg_wrap">
                                                    <div className="progress_bg" style={{ width: "100%" }} />
                                                </div>
                                            </div>
                                        </div>
                                        <div className="progress_item open" data-value={70}>
                                            <div className="item_in">
                                                <h3 className="progress_title">Spring Data</h3>
                                                <span
                                                    className="progress_percent"
                                                    style={{ right: "30%" }}
                                                >
                                                    70%
                                                </span>
                                                <div className="bg_wrap">
                                                    <div className="progress_bg" style={{ width: "100%" }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="progress_item open" data-value={70}>
                                            <div className="item_in">
                                                <h3 className="progress_title">MySql</h3>
                                                <span
                                                    className="progress_percent"
                                                    style={{ right: "30%" }}
                                                >
                                                    70%
                                                </span>
                                                <div className="bg_wrap">
                                                    <div className="progress_bg" style={{ width: "100%" }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="progress_item open" data-value={60}>
                                            <div className="item_in">
                                                <h3 className="progress_title">Node.js</h3>
                                                <span
                                                    className="progress_percent"
                                                    style={{ right: "40%" }}
                                                >
                                                    60%
                                                </span>
                                                <div className="bg_wrap">
                                                    <div className="progress_bg" style={{ width: "100%" }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="progress_item open" data-value={70}>
                                            <div className="item_in">
                                                <h3 className="progress_title">HTML5 &amp; CSS3</h3>
                                                <span
                                                    className="progress_percent"
                                                    style={{ right: "30%" }}
                                                >
                                                    70%
                                                </span>
                                                <div className="bg_wrap">
                                                    <div className="progress_bg" style={{ width: "100%" }} />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="progress_item open" data-value={60}>
                                            <div className="item_in">
                                                <h3 className="progress_title">Git</h3>
                                                <span
                                                    className="progress_percent"
                                                    style={{ right: "40%" }}
                                                >
                                                    60%
                                                </span>
                                                <div className="bg_wrap">
                                                    <div className="progress_bg" style={{ width: "100%" }} />
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </section>
                        {/* /CV: Skills Section  */}





                    </div>
                    {/* /CV Content Side  */}

                </div>
                {/* CV Inner  */}

            </div>
            {/* /Modal CV Card  */}
        </>
    );
}
