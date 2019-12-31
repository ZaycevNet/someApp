import React from "react";

const Component = function(data) {
  const stylesheets = {
    container: {
      position: "relative",
      minHeight: "60vh",
      margin: "20vh auto 10vh",
      padding: "30px"
    },
    background: {
      position: "absolute",
      top: 0,
      left: 0,
      width: "100%",
      height: "100%",
      filter: "blur(0px)",
      boxShadow: "#21212169 0px 0px 10px",
      borderRadius: "4px",
      backgroundColor: "#fff"
    }
  };

  return (
    <div className="container" style={stylesheets.container}>
      <div style={stylesheets.background}></div>
      {data.children}
    </div>
  );
};

export default Component;
