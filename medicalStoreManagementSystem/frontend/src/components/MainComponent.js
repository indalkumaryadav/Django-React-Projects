import React from "react";
import Overlay from "./Overlay";
import NavBar from "./NavBar";
import SideBar from "./SideBar";
import PageLoader from "./PageLoader";
import HomeComponent from "./HomeComponent";

import GoogleFontLoader from "react-google-font-loader";
import "adminbsb-materialdesign/css/themes/all-themes.css";

class MainComponent extends React.Component {
  state = {
    bodyClass: "theme-red ls-closed",
  };

  onBarClick = () => {
    if (this.state.bodyClass == "theme-red ls-closed overlay-open") {
      this.setState({ bodyClass: "theme-red ls-closed" });
    }
  };
  render() {
    if (this.state.width > 1150) {
      document.getElementById("root").className = "theme-red";
    } else {
      document.getElementById("root").className = this.state.bodyClass;
    }
    return (
      <>
        <GoogleFontLoader
          fonts={[
            {
              font: "Roboto",
              weights: [400, 700],
            },
          ]}
          subsets={["latin", "cyrillic-ext"]}
        />
        <GoogleFontLoader
          fonts={[
            {
              font: "Material+Icons",
            },
          ]}
        />
        <Overlay />
        <NavBar onBarClick={this.onBarClick} />
        <SideBar />
        <HomeComponent />
      </>
    );
  }
}

export default MainComponent;
