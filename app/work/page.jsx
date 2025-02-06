"use client";

import { AnimatePresence, motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { BsArrowUpRight, BsGitlab } from "react-icons/bs";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import WorkSliderBtns from "@/components/WorkSliderBtns";
import work1 from "../../assets/work/work1.jpg";
import work2 from "../../assets/work/work2.jpg";
import work3 from "../../assets/work/work3.jpg";
import work4 from "../../assets/work/work4.jpg";
import work5 from "../../assets/work/work5.jpg";
import work6 from "../../assets/work/work6.jpg";
import work7 from "../../assets/work/work7.jpg";
import { Button } from "@/components/ui/button";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "BJBS E-Recrutment",
    description:
      "BJBS E-Recrutment is a Web-based Application, there is two web application, first is web for admin and staff to manage an applicant, second is web for applicant to apply job in BJBS.",
    stack: [
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Springboot" },
      { name: "PostgreSql" },
    ],
    image: work7,
    live: "https://hiring.bjbsyariah.co.id",
    git: "https://gitlab.com/bjbs_haji/bjbs-erecruitment-staff-fe/-/tree/uat?ref_type=heads",
  },
  {
    num: "02",
    category: "frontend",
    title: "Dayalima Engauge",
    description:
      "EnGauge is a Web-Based Application with a Mobile View View on the Participant. FacilitatingClients/Vendors to be able to perform testing on prospective employees using the test tools/tool setsavailable in the application (cms).",
    stack: [
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Springboot" },
      { name: "PostgreSql" },
    ],
    image: work6,
    live: "",
    git: "https://gitlab.com/engauge_project/egfe-cms/-/tree/development?ref_type=heads",
  },
  {
    num: "03",
    category: "frontend",
    title: "Dayalima Learning Hub",
    description:
      "Application for manage talent and web for talent to learning.",
    stack: [
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Springboot" },
      { name: "PostgreSql" },
    ],
    image: work5,
    live: "",
    git: "https://gitlab.com/engauge_project/egfe-participant/-/tree/development?ref_type=heads",
  },
  {
    num: "04",
    category: "frontend",
    title: "Annual Leave Application",
    description:
      "Application for annual leave to be approved by Supervisor and HRD.",
    stack: [
      { name: "Javascript" },
      { name: "Vue.js" },
      { name: "Go" },
      { name: "Ruby" },
      { name: "PostgreSql" },
    ],
    image: work4,
    live: "",
    git: "",
  },
  {
    num: "05",
    category: "frontend",
    title: "Pegadaian",
    description: "Application for manage customer data pegadaian.",
    stack: [
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Springboot" },
      { name: "PostgreSql" },
    ],
    image: work3,
    live: "",
    git: "https://gitlab.com/pegadaian79/ims-pegadaian",
  },
  {
    num: "06",
    category: "frontend",
    title: "Loyola",
    description:
      "Web based application to acceptance new students at SMA Kolese Loyola Semarang.",
    stack: [
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Springboot" },
      { name: "PostgreSql" },
    ],
    image: work2,
    live: "https://ppdb.yayasanloyola.org",
    git: "https://gitlab.com/loyola79/lylfe",
  },
  {
    num: "07",
    category: "frontend",
    title: "Field Service Management",
    description:
      "Web application used for customer services to manage and communicate with resources in the field.",
    stack: [
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Springboot" },
      { name: "PostgreSql" },
    ],
    image: work1,
    live: "",
    git: "https://gitlab.com/fsm79/fsmfe",
  },
];

export default function Work() {
  const [project, setProject] = useState(projects[0]);
  // State variable for managing zoomed image
  const [zoomedImage, setZoomedImage] = useState(null);

  // Function to open zoomed image
  const openZoomedImage = (imageUrl) => {
    setZoomedImage(imageUrl);
  };
  // Function to close zoomed image
  const closeZoomedImage = () => {
    setZoomedImage(null);
  };

  const handleSlideChange = (swiper) => {
    //get current slide index
    const currentIndex = swiper.activeIndex;
    //update project state based on current slide index
    setProject(projects[currentIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-[50%] xl:h-[460px] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-[50%]">
              {/* outline num */}
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              {/* project category */}
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.title} project
              </h2>
              {/* project description */}
              <p className="text-white/60">{project.description}</p>
              {/* stack */}
              <ul className="flex gap-4 flex-wrap">
                {project.stack.map((item, index) => {
                  return (
                    <li key={index} className="text-xl text-accent">
                      {item.name}
                      {/* remove the last comma */}
                      {index !== project.stack.length - 1 && ","}
                    </li>
                  );
                })}
              </ul>
              {/* border */}
              <div className="border border-white/20 "></div>
              {/* buttons */}
              <div className="flex items-center gap-4">
                {/* live project button */}
                {project?.live !== "" ? (
                  <Link href={project.live} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Live Project</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
                {/* git project button */}
                {project?.git !== "" ? (
                  <Link href={project.git} target="_blank">
                    <TooltipProvider delayDuration={100}>
                      <Tooltip>
                        <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                          <BsGitlab className="text-white text-3xl group-hover:text-accent" />
                        </TooltipTrigger>
                        <TooltipContent>
                          <p>Git Repository</p>
                        </TooltipContent>
                      </Tooltip>
                    </TooltipProvider>
                  </Link>
                ) : null}
              </div>
            </div>
          </div>
          <div className="w-full xl:w-[50%]">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              className="xl:h-[520px] mb-12 cursor-pointer"
              onSlideChange={handleSlideChange}
              onClick={() => openZoomedImage(project?.image)}
            >
              {projects.map((item, index) => {
                return (
                  <SwiperSlide key={index} className="w-full">
                    <div className="h-[460px] relative group flex justify-center items-center bg-pink-50/20">
                      {/* overlay */}
                      <div className="absolute top-0 bottom-0 w-full h-full bg-black/10 z-10"></div>
                      {/* image */}
                      <div className="relative w-full h-full">
                        <Image
                          alt=""
                          src={item.image}
                          fill
                          className="object-contain"
                          sizes="w-full h-full"
                        />
                      </div>
                    </div>
                  </SwiperSlide>
                );
              })}
              {/* skuder button */}
              <WorkSliderBtns
                containerStyles="flex gap-2 absolute right-0 bottom-[calc(50%_-_22px)] xl:bottom-0 z-20 w-full justify-between xl:w-max xl:justify-none"
                btnStyles="bg-accent hover:bg-accent-hover text-primary text-[22px] w-[44px] h-[44px] flex justify-center items-center transition-all"
              />
              <div className="bottom-3 right-3 absolute z-20 xl:hidden">
                <Button onClick={() => openZoomedImage(project?.image)}>
                  Zoom Image
                </Button>
              </div>
            </Swiper>
            <AnimatePresence initial={false}>
              {zoomedImage ? (
                <motion.div
                  className="fixed top-0 left-0 w-full h-full bg-black/50 flex justify-center items-center z-[1000] cursor-pointer"
                  onClick={closeZoomedImage}
                  initial={{ opacity: 0 }}
                  animate={{
                    opacity: 1,
                    transition: {
                      delay: 0.2,
                      duration: 0.4,
                      ease: "easeInOut",
                    },
                  }}
                  exit={{ opacity: 0 }}
                >
                  <Image
                    src={zoomedImage}
                    alt="zoomed-image"
                    className="min-w-[90vw] max-h-[90vh]"
                    sizes="min-w-[90vw] max-h-[90vh]"
                  />
                </motion.div>
              ) : null}
            </AnimatePresence>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
