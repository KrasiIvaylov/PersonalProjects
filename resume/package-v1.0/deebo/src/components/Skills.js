import React from 'react';

export default function Skills() {
    return (

        <>
            {/* Section Skills */}
            <section id="scills" className="section_skills wow fadeInRight" data-wow-delay=".7s">
                <div className="scills_wrapper">
                    <div className="container narrow">
                        <div className="scills_title">
                            <h3>Knowledge &amp; Skills</h3>
                        </div>
                        <div className="scills_about">
                            <p>For over two years, I've studied businesses to craft honest, emotional experiences through brand development, web design and database management. </p>
                        </div>
                    </div>
                    <div className="container narrow2">
                        <div className="fn_cs_progress_bar">
                            <div className="progress_item open" data-value={60}>
                                <div className="item_in">
                                    <h3 className="progress_title">Java</h3>
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
                            <div className="progress_item open" data-value={55}>
                                <div className="item_in">
                                    <h3 className="progress_title">HTML5 &amp; CSS3</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "45%" }}
                                    >
                                        55%
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
            {/* /Section Scills */}
        </>);
}
