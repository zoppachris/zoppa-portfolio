import work1 from "../assets/work/work1.jpg";
import work2 from "../assets/work/work2.jpg";
import work3 from "../assets/work/work3.jpg";
import work4 from "../assets/work/work4.jpg";
import work5 from "../assets/work/work5.jpg";
import work6 from "../assets/work/work6.jpg";
import work7 from "../assets/work/work7.jpg";
import work8 from "../assets/work/work8.jpg";

const works = [
  {
    num: "01",
    category: "fullstack",
    title: "Web Repository",
    description:
      "Repository Website of University Nurtanio to store and manage students thesis.",
    stack: [
      { name: "Javascript" },
      { name: "React.js" },
      { name: "Springboot" },
      { name: "PostgreSql" },
    ],
    image: work8,
    live: "",
    git: "https://github.com/zoppachris/web-repository-be",
    git2: "https://github.com/zoppachris/web-repository-fe",
  },
  {
    num: "02",
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
    num: "03",
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
    num: "04",
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
    num: "05",
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
    num: "06",
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
    num: "07",
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
    num: "08",
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

export default works;
