///Streo Project
import StreoImg1 from "../img/Streo/StreoImg1.png";
import StreoImg2 from "../img/Streo/StreoImg2.png";

///Whitelabel Project
import WhitelabelImg1 from "../img/Whitelabel/Whitelabelimg1.png";
import WhitelabelImg2 from "../img/Whitelabel/Whitelabelimg2.png";

///Shopster Project
import ShopsterImg1 from "../img/Shopster/ShopsterImg1.png";
import ShopsterImg2 from "../img/Shopster/ShopsterImg2.png";

///EasyRewardz Project
import EasyImg1 from "../img/EasyRewardz/EasyImg1.png";
import EasyImg2 from "../img/EasyRewardz/EasyImg2.png";

///HRMS Project
import HrmsImg1 from "../img/HRMS/HrmsImg1.png";
import HrmsImg2 from "../img/HRMS/HrmsImg2.png";

let ConfigData = {
  SkillsData: [
    { id: "HTML5_skill", content: "HTML5", porcentage: "80%", value: "80" },
    { id: "CSS3_skill", content: "CSS3", porcentage: "75%", value: "75" },
    {
      id: "JavaScript_skill",
      content: "JavaScript",
      porcentage: "90%",
      value: "90",
    },
    {
      id: "ReactJS_skill",
      content: "ReactJS",
      porcentage: "85%",
      value: "85",
    },
    {
      id: "Nodejs_skill",
      content: "Node Js",
      porcentage: "60%",
      value: "60",
    },
    {
      id: ".net_skill",
      content: "Asp.Net core",
      porcentage: "50%",
      value: "50",
    },
    {
      id: "sql_skill",
      content: "Database",
      porcentage: "45%",
      value: "45",
    },
  ],
  AboutMeData: [
    {
      id: "first-p-about",
      content:
        "I'm a Software Engineer specialised in frontend and backend development for complex scalable web apps.",
    },
    {
      id: "second-p-about",
      content:
        "I am passionate about building excellent software that improves the lives of those around me. I specialize in creating software for clients ranging from individuals and small-businesses all the way to large enterprise corporations.",
    },
    {
      id: "third-p-about",
      content:
        "What would you do if you had a software expert available at your fingertips?",
    },
  ],
  WorkProjectsData: [
    {
      id: 1,
      image1: StreoImg1,
      image2: StreoImg2, 
      projectName: "Streo Music",
      projectCategory: "React JS (Redux), Node JS, Rubby, Live Streaming",
    },
    {
      id: 2,
      image1: WhitelabelImg1, 
      image2: WhitelabelImg2,
      projectName: "White-Labelling",
      projectCategory: "React JS (Redux-Saga), Rubby, Jquery",
    },
    {
      id: 3,
      image1: ShopsterImg1,
      image2: ShopsterImg2,
      projectName: "Easy Rewardz (Shopster)",
      projectCategory: "React JS , ASP .Net Core 2.0, Node JS, MYSQL Workbench",
    },
    {
      id: 4,
      image1: EasyImg1,
      image2: EasyImg2,
      projectName: "Easy Rewardz (Ticketing)",
      projectCategory: "React JS , ASP .Net Core 2.0, Node JS, MYSQL Workbench",
    },
    {
      id: 5,
      image1: HrmsImg1,
      image2: HrmsImg2,
      projectName: "HRMS",
      projectCategory: "React Js, ASP .Net Core 2.0, MS SQL 2012, HTML",
    },
  ],
};

export default ConfigData;
