import React, { useState, useRef, useEffect } from "react";

import {
  CarouselButton,
  CarouselButtonDot,
  CarouselButtons,
  CarouselContainer,
  CarouselItem,
  CarouselItemImg,
  CarouselItemText,
  CarouselItemTitle,
  CarouselMobileScrollNode,
  TimelineText,
} from "./TimeLineStyles";
import {
  Section,
  SectionDivider,
  SectionText,
  SectionTitle,
} from "../../styles/GlobalComponents";
import { TimeLineData } from "../../constants/constants";
import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { MdWorkOutline } from "react-icons/md";
import { TbPointFilled } from "react-icons/tb";

const TOTAL_CAROUSEL_COUNT = TimeLineData.length;

const Timeline = () => {
  const [activeItem, setActiveItem] = useState(0);
  const carouselRef = useRef();

  // const scroll = (node, left) => {
  //   return node.scrollTo({ left, behavior: "smooth" });
  // };

  const handleClick = (e, i) => {
    e.preventDefault();

    if (carouselRef.current) {
      const scrollLeft = Math.floor(
        carouselRef.current.scrollWidth * 0.7 * (i / TimeLineData.length)
      );

      scroll(carouselRef.current, scrollLeft);
    }
  };

  const handleScroll = () => {
    if (carouselRef.current) {
      const index = Math.round(
        (carouselRef.current.scrollLeft /
          (carouselRef.current.scrollWidth * 0.7)) *
          TimeLineData.length
      );

      setActiveItem(index);
    }
  };

  // snap back to beginning of scroll when window is resized
  // avoids a bug where content is covered up if coming from smaller screen
  // useEffect(() => {
  //   const handleResize = () => {
  //     scroll(carouselRef.current, 0);
  //   };

  //   window.addEventListener("resize", handleResize);
  // }, []);

  return (
    <Section id="about">
      <SectionDivider></SectionDivider>
      <br />
      <SectionTitle>About</SectionTitle>
      <SectionText>
        This is my journey from studies into the real world.
      </SectionText>
      {/* <CarouselContainer ref={carouselRef} onScroll={handleScroll}>
        <>
          {TimeLineData.map((item, index) => (
            <CarouselMobileScrollNode
              key={index}
              final={(index === TOTAL_CAROUSEL_COUNT - 1).toString()}
            >
              <CarouselItem
                index={index}
                id={`carousel__item-${index}`}
                active={activeItem}
                onClick={(e) => handleClick(e, index)}
              >
                <CarouselItemTitle>{item.year}</CarouselItemTitle>
                <CarouselItemText>{item.text}</CarouselItemText>
              </CarouselItem>
            </CarouselMobileScrollNode>
          ))}
        </>
      </CarouselContainer>
      <CarouselButtons>
        {TimeLineData.map((item, index) => (
          <CarouselButton
            key={index}
            index={index}
            active={activeItem}
            onClick={(e) => handleClick(e, index)}
            type="button"
          >
            <CarouselButtonDot active={activeItem}></CarouselButtonDot>
          </CarouselButton>
        ))}
      </CarouselButtons> */}
      <VerticalTimeline>
        {TimeLineData.map((element) => (
          <VerticalTimelineElement
            key={element.id}
            date={element.date}
            dateClassName="date"
            contentStyle={{
              borderRadius: "10px",
              boxShadow: "3px 3px 20px rgba(80, 80, 80, 0.7)",
              background: "#0F1624",
            }}
            iconStyle={{ background: "RGB(0 0 0)", color: "#fff" }}
            icon={<MdWorkOutline size={"3rem"} />}
          >
            <CarouselItemTitle>{element.title}</CarouselItemTitle>
            <CarouselItemText>{element.location}</CarouselItemText>
            <TimelineText>
              <ul>
                {element.text.map((txt, index) => (
                  <li key={index}>{txt}</li>
                ))}
              </ul>
            </TimelineText>
          </VerticalTimelineElement>
        ))}
      </VerticalTimeline>
    </Section>
  );
};

export default Timeline;
