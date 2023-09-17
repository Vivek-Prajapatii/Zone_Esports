import React from "react";
import BootstrapCarousel from "@/components/carousels/BootStrap";
import ResponsiveCarousel from "@/components/carousels/ResponsiveCarousel";

function _carousel() {
  return (
    <div>
      <div style={{ padding: "50px", marginTop: "40px" }}>
        <BootstrapCarousel />
        <ResponsiveCarousel />
      </div>
    </div>
  );
}

export default _carousel;
