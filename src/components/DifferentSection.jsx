import React from "react";
import { motion } from "framer-motion";
import { styles } from "../styles";
import { uniquepoints } from "../constants";
import { SectionWrapper } from "../hoc";
import { textVariant } from "../utils/motion";
import TrendingUpIcon from '@mui/icons-material/TrendingUp';
import SavingsIcon from '@mui/icons-material/Savings';
import DiscountIcon from '@mui/icons-material/Discount';


const PointCard = ({ point }) => {


  return (
    <div className="pr-6 lg:p-5 rounded w-full md:w-auto" style={{ width: "100%" }}>
      <div
        className={`flex flex-col items-center justify-center ${
          point.icon == "margin" ? "lg:pl-10" : point.icon == "save" ? "lg:pl-10": "lg:pl-10"
        }`}
      >
        {point.icon == "margin" ? (
          <TrendingUpIcon sx={{ fontSize: 68, color: "chocolate" }} />
        ) : point.icon == "save" ? (
          <SavingsIcon sx={{ fontSize: 68, color: "chocolate" }} />
        ) : (
          <DiscountIcon sx={{ fontSize: 68, color: "chocolate" }} />
        )}
        <h3 className={`text-[black] text-[24px] font-bold `}>
          {point.title}
        </h3>
        <p
          className="text-secondary text-[16px] font-semibold"
          style={{ margin: 0 }}
        >
          {point.company_name}
        </p>
      </div>

      <ul className="mt-5 list-disc ml-5 space-y-2">
        {point.description.map((obj, index) => (
          <p
            key={`experience-point-${index}`}
            className="text-black text-[15px] pl-1 tracking-wider text-justify"
          >
            {obj}
          </p>
        ))}
      </ul>
      <br></br>
    </div>
  );
};

const UniquePointSect = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <h2 className={`${styles.sectionHeadText}`}>
          Why we are different ?
        </h2>
        <p className={`${styles.sectionSubText} `}>
          Romulus offers a UNIQUE DISTRIBUTION MODEL AND CUSTOMER OFFERING
        </p>
      </motion.div>

      <div className='mt-8 flex flex-col'>

        <div className="flex flex-wrap md:flex-nowrap gap-4">
          {uniquepoints.map((point, index) => (
            <PointCard
              key={`experience-${index}`}
              point={point}
            />
          ))}
          </div>
 
      </div>


    </>
  );
};

export default SectionWrapper(UniquePointSect, "Different");
