import React, { useState } from "react";
import ItemsCarousel from "react-items-carousel";
import styled from "styled-components";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleLeft,
  faAngleRight,
} from "@fortawesome/free-solid-svg-icons";
import Course from "../course/Course";
import { Link } from "react-router-dom";

const CourseWrapper = styled.div`
  position: relative;
`;
const Arrow = styled.div`
  width: 4.8rem;
  height: 4.8rem;
  background-color: black;
  border: 1px solid #6a6f73;
  border-radius: 50%;

  display: flex;
  justify-content: center;
  align-items: center;

  position: absolute;
  top: 15%;
  right: ${(props) => props.direction === "right" && "-1.6rem"};
  left: ${(props) => props.direction === "left" && "-1.6rem"};

  margin: auto;
  cursor: pointer;

  z-index: 2;

  :hover {
    box-shadow: 0 2px 4px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 8%);
  }
`

export const Carousel = ({ data }) => {
  const [activeItemIndex, setActiveItemIndex] = useState(0);
  const chevronWidth = 50;
    console.log(data);

  return (
        <CourseWrapper>       
            <ItemsCarousel
              requestToChangeActive={setActiveItemIndex}
              activeItemIndex={activeItemIndex}
              numberOfCards={5}
              gutter={15}
              leftChevron={<Arrow direction="left">{ 
                              <FontAwesomeIcon
                                style={{ color: "white", fontSize: "2rem" }}
                                icon={faAngleLeft}
                              />}
                          </Arrow>}
              rightChevron={<Arrow direction="right">{ 
                              <FontAwesomeIcon
                                style={{ color: "white", fontSize: "2rem" }}
                                icon={faAngleRight}
                              />}
                            </Arrow>}
              outsideChevron={false}
              chevronWidth={chevronWidth}
            >
      
                {data.map((item, idx) => (
                   <Link to={`/course/${item.id + 1}`} key={item.id + 1}> <Course item={item} /></Link>
                ))}

            </ItemsCarousel>
        </CourseWrapper>

  );
};

