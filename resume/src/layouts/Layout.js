import Head from "next/head";
import { useState, useEffect } from "react";
// import PanelContent from "../components/PanelContent";
import { dataImage } from "../utilits";
//import Cursor from "./Cursor";
import Footer from "./Footer";
import HeroHeader from "./HeroHeader";
import ModalBox from "./ModalBox";
import ModalCV from "./ModalCV";
import Nav from "./Nav";
import Overlay from "./Overlay";
import RightBar from "./RightBar";

const Layout = ({ children }) => {
  useEffect(() => {
    dataImage();
  });

  const [isResume, setResume] = useState(false);
  const resumeTrueFalse = () => {
    document.querySelector("body").classList.toggle("resume-opened")
  }

  const [isToggled, setToggled] = useState(false);
  const toggleTrueFalse = () => {
    document.querySelector("body").classList.toggle("rightbar-opened");
    if (document.querySelector("body").classList.contains('rightbar-opened')) {
      const rightBar = document.getElementsByClassName('right_bar_overlay')[0];
      rightBar.addEventListener('mouseover', (ev) => {
        rightBar.setAttribute('style', `cursor: default;`);
      });

      rightBar.addEventListener('click', (ev) => {
        document.querySelector("body").classList.remove('rightbar-opened');
      });
    }
  }

  return (
    <>
      <Head>
        <title>Krasimir Krasimirov Personal Resume</title>
      </Head>
      <div className="krasiIvaylov_fn_main">
        <Overlay />
        <ModalBox />
        <ModalCV resumeTrueFalse={resumeTrueFalse} />
        <RightBar toggleTrueFalse={toggleTrueFalse} />
        <div className="krasiIvaylov_fn_wrapper">

          <div className="krasiIvaylov_page">
            <Nav toggleTrueFalse={toggleTrueFalse} />
            <HeroHeader resumeTrueFalse={resumeTrueFalse} />
            <div className="main">
              {children}
            </div>
            <Footer />

          </div>
          {/* Totop Button */}
          <a href="#" className="krasiIvaylov_fn_totop"></a>
          {/* /Totop Button */}
        </div>
      </div>
    </>
  );
};

export default Layout;
