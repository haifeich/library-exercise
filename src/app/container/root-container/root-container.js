import React from "react";
import Main from "../../components/main/main";
import Nav from "../../components/nav/nav";

class RootContainer extends React.PureComponent {
  render() {
    return (
      <>
        <Nav />
        <Main />
      </>
    );
  }
}

export default RootContainer;
