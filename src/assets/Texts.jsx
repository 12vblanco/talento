import { CgPerformance } from "react-icons/cg";
import { MdModelTraining } from "react-icons/md";
import FrameIcon from "./icons/FrameIcon";
import ProfileIcon from "./icons/ProfileIcon";
import SelectionIcon from "./icons/SelectionIcon";

export const cardText = [
  {
    id: "01",
    title: "Job Profile",
    subTitle:
      "We’ll define the roles that will drive your organizational performance.",
    text: "Job profile summarizes the key characteristics of a given role, including the educational requirements, duties and pay rates. Job Description outlines the responsibilities of the position while a job or performance profile sets the expected standards for performing a task.    ",
    // icon: CgProfile,
    icon: ProfileIcon,
  },
  {
    id: "02",
    title: "Recruitment & Selection",
    subTitle:
      "We’ll seek and place the right Talent, at the right place, and at the right time.",
    text: "Recruitment involves getting the job description in front of as many potential candidates as possible. Selection is about narrowing down the pool of applicants until you’re left with the strongest candidate. ",
    icon: SelectionIcon,
  },
  {
    id: "03",
    title: "Competency Framework",
    subTitle: "We’ll help you craft and communicate performance expectations.",
    text: "A competency framework defines the knowledge, skills, and attributes that employees need to have if they are to perform successfully; including congruence between individual performance and organizational success.",
    icon: FrameIcon,
  },
  {
    id: "04",
    title: "Performance Management",
    subTitle:
      "We’ll develop and keep the performance management wheel turning.    ",
    text: "Performance management is an ongoing process of communication between a supervisor and an employee that occurs throughout the year, in support of accomplishing the strategic objectives of the organization.",
    icon: CgPerformance,
  },
  {
    id: "05",
    title: "Training and Coaching",
    subTitle:
      "We’ll identify needs, design interventions, and facilitate training and coaching.",
    text: "Training is the process of learning the skills you need to do a particular job or activity while coaching refers to a method of training, counselling or instructing an individual or a group how to develop skills to enhance their productivity or overcome a performance problem.",
    icon: MdModelTraining,
  },
];
