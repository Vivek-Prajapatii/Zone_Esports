import React from "react";
import Carousel from "react-bootstrap/Carousel";
import { SetStateAction, useState } from "react";
import Avatar from "@mui/material/Avatar";
import { orange } from "@mui/material/colors";

function Testimonial() {
  //   const { bootstrap } = items;
  const [index, setIndex] = useState(0);

  const handleSelect = (selectedIndex: any, e: any) => {
    setIndex(selectedIndex);
  };
  return (
    <div style={{marginTop:"2rem"}}>
      <Carousel activeIndex={index} onSelect={handleSelect} pause={false}>
        <Carousel.Item
          key={"234"}
          className={".itemP"}
          interval={4000}
          style={{
            backgroundColor: "transparent",
            height: "50vh",
            fontSize: "16px",
            width: "100%",
          }}
        >
          <Carousel.Caption
            className={""}
            style={{
              backgroundColor: "transparent",
              height: "fit-content",
              width: "fit-content",
              fontSize: "18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ backgroundColor: "#ff5100", width: 70, height: 70, mb: 3 }}
            >
              SM
            </Avatar>
            <p>
              When it comes to BGMI tournaments, this website is the ultimate
              destination. The events are well-organized, and I've met some of
              my best gaming buddies here. Whether you're a seasoned player or
              just starting out, this platform offers an inclusive and exciting
              gaming environment that keeps you coming back for more.
            </p>
            <h6>- Sara M.</h6>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item
          key={"23ddf"}
          className={".itemP"}
          interval={4000}
          style={{
            backgroundColor: "transparent",
            height: "50vh",
            fontSize: "16px",
            width: "100%",
          }}
        >
          <Carousel.Caption
            className={""}
            style={{
              backgroundColor: "transparent",
              height: "fit-content",
              width: "fit-content",
              fontSize: "18px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Avatar
              sx={{ backgroundColor: "#aac06d", width: 70, height: 70, mb: 3 }}
            >
              DN
            </Avatar>
            <p>
              The BGMI tournaments on this platform have truly elevated my
              gaming experience. It's not just about winning; it's about the
              camaraderie and the passion for the game that I've found here.
              Highly recommended for any BGMI player looking to take their
              gaming to the next level. I've learned so much and had a ton of
              fun!
            </p>
            <h6>- Dev Narayan S.</h6>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>
  );
}

export default Testimonial;
