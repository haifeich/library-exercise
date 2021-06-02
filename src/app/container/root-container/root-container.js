import React from "react";
import Main from "../../components/main/main";
import Nav from "../../components/nav/nav";
import Footer from "../../components/footer/footer";

class RootContainer extends React.PureComponent {
  render() {
    return (
      <>
        <Nav />
        <Main />
        <Footer />
      </>
    );
  }
}

export default RootContainer;
