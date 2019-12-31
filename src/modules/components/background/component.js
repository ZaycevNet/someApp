import React from "react";

const Component = function() {
  const styles = {
    backgroundImage:
      "url(https://www.toptal.com/designers/subtlepatterns/patterns/christmas-colour.png)",
    position: "fixed",
    top: 0,
    width: "100%",
    height: "100%",
    zIndex: -1,
    filter: "blur(1px)"
  };

  return <div style={styles}></div>;
};

export default Component;
