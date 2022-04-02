import React from 'react';

export default function Work() {
    return (
        <>
            {/* Section Work */}
            <section id="work" className="section_work">
                <div className="container">
                    <div className="work_title">
                        <h3>Featured Projects</h3>
                    </div>
                    <div className="work_content">
                        <div className="work_content_left_bar">
                            <h2>Resume</h2>

                            <p className="about_deduma">The latest project of mine is this resume, built through my first steps in React.js. More of my work you can find on my Gihub page from the links above.</p>

                            <a className='git_link' href="https://github.com/KrasiIvaylov/PersonalProjects/tree/testbranch/resume" >Repository</a>

                        </div>
                        <div className="work_content_right_bar">
                            <div className="right_bar_wrapper">
                                <div className="deduma_image" style={{ "backgroundImage": "url(img/logo/thatsMe.jpg)" }}></div>
                                <img src="img/thumb/square.jpg" alt="" />
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            {/* /Section Work */}
        </>
    );
}
