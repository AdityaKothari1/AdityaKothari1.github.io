import { Heading } from "@chakra-ui/react";
import React from "react";
import styles from "./About.module.css";

const About = () => {
  return (
    <div name="about" className="w-full h-[600px] bg-[#1F2937] text-gray-300 ">
      <div className="flex flex-col justify-center items-center w-full h-full">
        <div className="max-w-[1000px] w-full grid grid-cols-1 gap-8 ">
          <div
            className="sm:text-right pb-4 pl-4"
            style={{ marginTop: "-13%" }}
          >
            <h2 className={styles.heading}>About</h2>
          </div>
          <div></div>
        </div>
        <div
          className="max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-6"
          style={{ marginTop: "-5%" }}
        >
          <div
            className="sm:text-right text-4xl font-bold"
            style={{ margin: "auto", marginTop: "-2%" }}
          >
            <p>Hi, I am Aditya Sharma. May I borrow a moment!</p>
          </div>
          <div style={{ fontSize: "18px" }}>
            <p>
              {" "}
              I have been doing FULL-TIME course with Masai School.There I am
              learning Data Structures and Algorithm, JavaScript,React etc.There
              I have been doing 1100+ hrs of coding.I have hands-on experience
              developing websites using front-end and back-end skills like
              React, Redux, Html, CSS, Nodejs, JavaScript, etc. Looking to
              further enhance Html, React, Redux, Nodejs, and Js skills as a
              future full stack developer
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
