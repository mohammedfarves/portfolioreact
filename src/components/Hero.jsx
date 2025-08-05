import { motion } from "framer-motion";
import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";
import './hero.css';


const Hero = () => {
  return (
    <section className='relative w-full h-screen mx-auto'>
      <div
        className={`absolute inset-0 top-[100px] sm:top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-col sm:flex-row items-start gap-5`}
      >
        {/* Left vertical line and dot */}
        <div className='flex flex-row sm:flex-col justify-center items-center mt-5 sm:mt-0'>
          <div className='heroDot' />
          <div className='heroLine' />
        </div>


        {/* Text content */}
         <div>
         <h1 className="heroHeadText text-white">
           Hi, I'm <span className='text-[#915EFF]'>Mohammed Farves</span>
         </h1>
           <p className="heroSubText mt-2 text-white-100">
             Aspiring Web Developer and Software Engineer <br className='sm:block hidden' />
              My Portfolio
            </p>
          </div>

      </div>

      {/* 3D Canvas */}
      <ComputersCanvas />

      {/* Scroll indicator */}
      <div className='absolute xs:bottom-10 bottom-20 w-full flex justify-center items-center'>
        <a href='#about'>
          <div className='w-[30px] h-[55px] sm:w-[35px] sm:h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2'>
            <motion.div
              animate={{ y: [0, 24, 0] }}
              transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
              className='w-3 h-3 rounded-full bg-secondary mb-1'
            />
          </div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
