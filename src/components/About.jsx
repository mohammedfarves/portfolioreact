import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className='w-full sm:w-[250px]'>
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className='w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card'
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-tertiary rounded-[20px] py-5 px-6 sm:px-12 min-h-[240px] flex justify-evenly items-center flex-col'
      >
        <img
          src={icon}
          alt='service-icon'
          className='w-12 h-12 sm:w-16 sm:h-16 object-contain'
        />
        <h3 className='text-white text-[18px] sm:text-[20px] font-bold text-center'>
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Introduction</p>
        <h2 className={styles.sectionHeadText}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className='mt-4 text-secondary text-[15px] sm:text-[17px] max-w-3xl leading-[26px] sm:leading-[30px]'
      >
        Hi, I’m Mohammed Farves🎓 Bachelor of Engineering in Computer Science
        💻 Passionate Software & Web Developer | Aspiring Full-Stack Engineer & Data Enthusiast.
        I’m a dedicated developer with a solid foundation in Computer Science Engineering, currently pursuing my BE CSE.
        Skilled in building responsive, user-friendly websites and web applications, I’m focusing on front-end technologies while steadily advancing into back-end development to become a full-stack engineer.
        Alongside coding, I have a deep interest in data — from visualization and modeling to crafting dashboards that turn raw data into meaningful insights.
        My learning approach is hands-on and project-driven, believing real skills come from real practice.
        Always curious and motivated to explore new tools, frameworks, and technologies to create better digital experiences and deliver value through my work.
      </motion.p>

      <div className='mt-10 sm:mt-20 flex flex-wrap justify-center gap-6 sm:gap-10'>
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
