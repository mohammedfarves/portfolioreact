import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import { testimonials } from "../constants";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  source_code_link,
  image,
}) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-6 sm:p-10 rounded-3xl w-full max-w-[320px]"
  >
    <p className="text-white font-black text-[36px] sm:text-[48px]">"</p>

    <div className="mt-1">
      <p className="text-white tracking-wider text-[16px] sm:text-[18px]">
        {testimonial}
      </p>

      <div className="mt-7 flex justify-between items-center gap-2">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[14px] sm:text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>

          <p className="mt-1 text-secondary text-[11px] sm:text-[12px]">
            {designation} {company}
          </p>
        </div>
        <img
          src={image}
          onClick={() => window.open(source_code_link, "_blank")}
          className="w-8 h-8 sm:w-10 sm:h-10 rounded-full object-cover cursor-pointer"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div className={`bg-tertiary rounded-2xl ${styles.padding} min-h-[300px]`}>
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Connect with Me on</p>
          <h2 className={styles.sectionHeadText}>Social Media's.</h2>
        </motion.div>
      </div>

      <div className="-mt-20 pb-14 px-4 sm:px-8 flex flex-col sm:flex-row flex-wrap gap-7 items-center justify-center">
        {testimonials.map((testimonial, index) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "");
