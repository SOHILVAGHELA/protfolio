import React from "react";
import { IoMdSchool } from "react-icons/io";

import {
  VerticalTimeline,
  VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import "./Education.css";
function Education() {
  return (
    <>
      <div className="education">
        <h2 className="col-12 mt-3 mb-1 text-center text-uppercase">
          Education Detail
        </h2>
        <hr />

        <VerticalTimeline>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            date="2021-2024"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">BCA</h3>
            <p className="vertical-timeline-element-subtitle">
              N.P. College Of Computer Studies And Mangement, kadi
            </p>
          </VerticalTimelineElement>
          <VerticalTimelineElement
            className="vertical-timeline-element--work"
            contentStyle={{ background: "white", color: "black" }}
            contentArrowStyle={{ borderRight: "7px solid  black" }}
            date="1/1/24-25/6/24"
            iconStyle={{ background: "#138781", color: "#fff" }}
            icon={<IoMdSchool />}
          >
            <h3 className="vertical-timeline-element-title">
              Full Stack Development
            </h3>
            <p className="vertical-timeline-element-subtitle">
              Internshala trainings{" "}
            </p>
          </VerticalTimelineElement>
        </VerticalTimeline>
      </div>
    </>
  );
}

export default Education;
