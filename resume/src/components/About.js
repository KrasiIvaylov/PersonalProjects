import React from 'react';
import { SVG_Twitter, SVG_Facebook, SVG_Instagram, SVG_Pinterest, SVG_Youtube } from '../../public/svg/svg'

export default function About() {
  return (
    <>
      {/* Section About */}
      <section id="about" className="section_about">
        <div className="container narrow">
          <div className="about_me">
            <div className="about_me_text">
              <p>A creative person with design and development expertise.  I gained my education at Software University Java program whilst learning a bit of Java Script, React, Spring, MySql along the road, and now i want to improve my skills at professional level. I am a fast learner, i understand the value in time management and clear communication, and I'm great at working with teams to get projects done right.
              </p>
            </div>
            <div className="about_me_more">
              <ul>
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
                  <a href="https://www.linkedin.com/in/krasimir-ivaylov-3b6800198" target="_blank" title="youtube.com">
                    <SVG_Youtube />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /Section About */}
    </>
  );
}

