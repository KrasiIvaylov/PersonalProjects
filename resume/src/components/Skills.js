import React from 'react';


export default function Skills() {
    return (

        <>
            {/* Section Skills */}
            <section id="cv_skills" className="section_skills wow fadeInRight" data-wow-delay=".7s">
                <div className="skills_wrapper">
                    <div className="container narrow">
                        <div className="skills_title">
                            <h3>Knowledge &amp; Skills</h3>
                        </div>
                        <div className="skills_about">
                        </div>
                    </div>
                    <div className="container narrow2">
                        <div className="fn_cs_progress_bar">
                            <div className="progress_item open" data-value={65}>
                                <div className="item_in">
                                    <h3 className="progress_title">Java</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "35%" }}
                                    >
                                        65%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "65%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="progress_item open" data-value={60}>
                                <div className="item_in">
                                    <h3 className="progress_title">Spring Data</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "40%" }}
                                    >
                                        60%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "60%" }} />
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
                                        <div className="progress_bg" style={{ width: "70%" }} />
                                    </div>
                                </div>
                            </div>

                            <div className="progress_item open" data-value={70}>
                                <div className="item_in">
                                    <h3 className="progress_title">Java Script</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "30%" }}
                                    >
                                        70%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "70%" }} />
                                    </div>
                                </div>
                            </div>
                            <div className="progress_item open" data-value={70}>
                                <div className="item_in">
                                    <h3 className="progress_title">React</h3>
                                    <span
                                        className="progress_percent"
                                        style={{ right: "30%" }}
                                    >
                                        70%
                                    </span>
                                    <div className="bg_wrap">
                                        <div className="progress_bg" style={{ width: "70%" }} />
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
                                        <div className="progress_bg" style={{ width: "70%" }} />
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
                                        <div className="progress_bg" style={{ width: "60%" }} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Section Skills */}
        </>);
}
