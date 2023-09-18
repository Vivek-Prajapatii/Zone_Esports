import React from "react";
import BootstrapCarousel from "@/components/carousels/BootStrap";
import ResponsiveCarousel from "@/components/carousels/ResponsiveCarousel";

function _home() {
  return (
    <div>
      <div style={{ paddingTop: "40px", marginTop: "30px" }}>
        <hr
          style={{
            background: "#0d0d0e",
            height: "1.5px",
            margin: "2px",
          }}
        />
        <BootstrapCarousel />
        <hr
          style={{
            background: "#0d0d0e",
            height: "1.5px",
            border: "none",
            margin: "5px",
          }}
        />
        {/* <ResponsiveCarousel /> */}
      </div>
    </div>
  );
}

export default _home;