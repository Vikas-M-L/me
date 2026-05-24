/* Change this file to get your personal Portfolio */

// To change portfolio colors globally go to the  _globalColor.scss file

import emoji from "react-easy-emoji";
import splashAnimation from "./assets/lottie/splashAnimation"; // Rename to your file name for custom animation

// Splash Screen

const splashScreen = {
  enabled: true, // set false to disable splash screen
  animation: splashAnimation,
  duration: 2000 // Set animation duration as per your animation
};

// Summary And Greeting Section

const illustration = {
  animated: true // Set to false to use static SVG
};

const greeting = {
  username: "Vikas M L",
  title: "Hi all, I'm Vikas",
  subTitle: emoji(
    "A motivated 3rd-year CSE student 🚀 with hands-on experience in AI/ML, computer vision, and full-stack web development. Proficient in Python, TensorFlow, OpenCV, and the MERN stack — passionate about building scalable, intelligent solutions for real-world challenges."
  ),
  resumeLink: "", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  github: "https://github.com/vikas-m-l",
  linkedin: "https://www.linkedin.com/in/vikasml/", // Replace with your actual LinkedIn URL
  gmail: "vikasml9353@gmail.com",
  leetcode: "https://leetcode.com/vikasml", // Replace with your actual LeetCode URL
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle:
    "CSE STUDENT BUILDING REAL-WORLD AI/ML SYSTEMS AND FULL-STACK WEB APPLICATIONS",
  skills: [
    emoji(
      "⚡ Design and train deep learning models for computer vision — image denoising, gesture recognition, medical imaging"
    ),
    emoji(
      "⚡ Build full-stack web applications with MERN Stack (React, Node.js, Express, MongoDB) and Python/FastAPI"
    ),
    emoji(
      "⚡ Work with Oracle Cloud Infrastructure, develop accessible interfaces, and automate workflows with Python"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Python",
      fontAwesomeClassname: "fab fa-python"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "JavaScript",
      fontAwesomeClassname: "fab fa-js"
    },
    {
      skillName: "HTML5",
      fontAwesomeClassname: "fab fa-html5"
    },
    {
      skillName: "CSS3",
      fontAwesomeClassname: "fab fa-css3-alt"
    },
    {
      skillName: "ReactJS",
      fontAwesomeClassname: "fab fa-react"
    },
    {
      skillName: "NodeJS",
      fontAwesomeClassname: "fab fa-node"
    },
    {
      skillName: "npm",
      fontAwesomeClassname: "fab fa-npm"
    },
    {
      skillName: "MongoDB",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "Git",
      fontAwesomeClassname: "fab fa-git-alt"
    },
    {
      skillName: "GitHub",
      fontAwesomeClassname: "fab fa-github"
    },
    {
      skillName: "TensorFlow",
      fontAwesomeClassname: "fas fa-brain"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Cambridge Institute of Technology",
      logo: require("./assets/images/cit-logo.jpg"),
      subHeader: "Bachelor of Engineering in Computer Science & Engineering",
      duration: "September 2023 – Present",
      desc: "3rd-year CSE student with a strong foundation in data structures, algorithms, AI/ML, and full-stack development.",
      descBullets: [
        "5th Place – Mini Project Exhibition, Dept. of CSE (2025)",
        "Selected for Samsung PRISM Research Collaboration Program",
        "3rd Place – 24-Hour MedAI Hackathon, Nagarjuna College of Engineering & Technology (2025)"
      ]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Python & AI/ML (TensorFlow, PyTorch, OpenCV)",
      progressPercentage: "90%"
    },
    {
      Stack: "Full Stack Web (MERN + Next.js + FastAPI)",
      progressPercentage: "82%"
    },
    {
      Stack: "Java & Data Structures / Algorithms",
      progressPercentage: "78%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Research Collaborator",
      company: "Samsung PRISM (Samsung R&D Institute India)",
      companylogo: require("./assets/images/samsung-logo.jpg"),
      date: "December 2025 – March 2026",
      desc: "Collaborating with Samsung R&D engineers on Attend Ease — an automated invoice billing calculator and attendance management portal.",
      descBullets: [
        "Built a three-tier web portal for labs to digitize attendance and auto-calculate pro-rata salaries including half days and LOP",
        "Implemented monthly billing report generation with audit trails and transparent payment calculations"
      ]
    },
    {
      role: "Frontend Developer Intern",
      company: "Assistive Technology Accelerator",
      companylogo: require("./assets/images/ata-logo.jpg"),
      date: "July 2025 – August 2025",
      desc: "Developed accessible, responsive web interfaces for assistive-technology products focused on usability for people with disabilities.",
      descBullets: [
        "Built screen-reader-compatible UI components for assistive-technology products",
        "Ensured compatibility with assistive tools and WCAG accessibility standards"
      ]
    }
  ]
};

/* Your Open Source Section to View Your Github Pinned Projects
To know how to get github key look at readme.md */

const openSource = {
  showGithubProfile: "true", // Set true or false to show Contact profile using Github, defaults to true
  display: true // Set false to hide this section, defaults to true
};

// Some big projects you have worked on

const bigProjects = {
  title: "Featured Projects",
  subtitle: "AI/ML AND FULL STACK PROJECTS BUILT TO SOLVE REAL-WORLD PROBLEMS",
  projects: [
    {
      image: require("./assets/images/personalos-project.jpg"),
      projectName: "PersonalOS Agent",
      projectDesc:
        "Autonomous multi-agent system (Observer · Planner · Executor) that monitors Gmail, Google Calendar, and the local filesystem via an MCP tool server, then plans and executes actions using an OpenRouter LLM. Features confidence-based routing, a real-time WebSocket approval dashboard, Twilio voice approval calls, and ChromaDB vector memory. Built for the SOLARIS X Hackathon 2026.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Vikas-M-L/mcp"
        }
      ]
    },
    {
      image: require("./assets/images/janadhristi-project.jpg"),
      projectName: "JanaDhristi 🇮🇳",
      projectDesc:
        "Free, real-time civic transparency platform for Karnataka — aggregates crop prices, dam levels, budget spending, school performance, and 25+ modules into clean district dashboards. Built with Next.js 16, TypeScript, Tailwind CSS v4, PostgreSQL (Neon), Upstash Redis, and an AI Civic Copilot powered by OpenRouter.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Balasubramani2004/JanaDhristi"
        }
      ]
    },
    {
      image: require("./assets/images/academic-companion-project.jpg"),
      projectName: "AI Academic Companion",
      projectDesc:
        "UPSC-first adaptive learning platform combining exam intelligence, personalized study planning, CSP-based workload optimization, LLM-generated notes, misconception-aware quizzes, and a daily execution loop. Built with React + Vite frontend and Flask + SQLAlchemy backend, featuring Gemini/OpenRouter AI and JWT authentication.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Balasubramani2004/Sakhi_Competitive_Companion"
        }
      ]
    },
    {
      image: require("./assets/images/isl-project.jpg"),
      projectName: "ISL Gesture Translator",
      projectDesc:
        "Real-time Indian Sign Language translator that captures hand gestures via webcam and converts them into English text and speech. Achieves 90–95% accuracy using a custom TensorFlow.js model with MediaPipe hand tracking. Built with Next.js frontend and Python/FastAPI backend.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Vikas-M-L/isl-fastapi-backend"
        }
      ]
    },
    {
      image: require("./assets/images/cvdl-project.jpg"),
      projectName: "CVDL Phase Image Denoising",
      projectDesc:
        "Deep-learning pipeline for denoising grayscale phase images at SNR levels from −5 dB to +25 dB. Custom 4-stage residual CNN (~589K params) achieves 29.01 dB PSNR and 0.946 SSIM. Served via an interactive Streamlit web app built with PyTorch.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Vikas-M-L/rbc"
        }
      ]
    },
    {
      image: require("./assets/images/medai-project.jpg"),
      projectName: "Pneumonia Detection System",
      projectDesc:
        "Advanced chest X-ray classifier combining EfficientNetV2-S and ConvNeXt-Tiny backbones with CBAM attention. Features Grad-CAM++ explainability, CutMix/MixUp augmentation, and a dark-themed Streamlit dashboard. 3rd Place — MedAI Hackathon 2025.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Vikas-M-L/final_mllab"
        }
      ]
    },
    {
      image: require("./assets/images/saferoute-project.jpg"),
      projectName: "SafeRoute Mobile App 📱",
      projectDesc:
        "AI-powered safety navigation PWA/Android app that routes users along the safest path using a custom A* algorithm and XGBoost model trained on crime data, street lighting, and time of day. Features 24/7 background GPS tracking, automatic stoppage detection, a 15-second emergency protocol with Twilio/Gmail guardian alerts, and a safety POI overlay for police stations and hospitals. Built with Leaflet.js and Ionic Capacitor v8.",
      footerLink: [
        {
          name: "GitHub",
          url: "https://github.com/Vivekma05/safest_path_app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements & Certifications 🏆 "),
  subtitle:
    "Hackathon placements, Oracle cloud certifications, and academic recognition",

  achievementsCards: [
    {
      title: "1st Prize – Jana Jagrathi, Amity College Hackathon",
      subtitle:
        "Won 1st place at the Amity College Hackathon for Jana Jagrathi — a civic transparency platform delivering real-time district-level government data to Karnataka citizens.",
      image: require("./assets/images/amity-1st.jpg"),
      imageAlt: "Amity College Hackathon 1st Prize",
      footerLink: []
    },
    {
      title: "2nd Prize – PersonalOS Agent, Amity College",
      subtitle:
        "Secured 2nd place at Amity College for PersonalOS Agent — an autonomous multi-agent AI system that monitors Gmail, Google Calendar, and the filesystem with a human-in-the-loop approval dashboard.",
      image: require("./assets/images/amity-2nd.jpg"),
      imageAlt: "Amity College Hackathon 2nd Prize",
      footerLink: []
    },
    {
      title: "3rd Place – MedAI Hackathon 2025",
      subtitle:
        "Built an advanced Pneumonia Detection System with dual-backbone deep learning (EfficientNetV2-S + ConvNeXt-Tiny) and Grad-CAM++ explainability. Secured 3rd place at the 24-hour MedAI Hackathon, Nagarjuna College of Engineering & Technology, Bengaluru.",
      image: require("./assets/images/nagarjuna3rd.jpg"),
      imageAlt: "MedAI Hackathon",
      footerLink: []
    },
    {
      title: "Oracle Cloud Infrastructure 2025 Foundations Associate",
      subtitle:
        "Passed OCI Foundations Associate certification (Exam 1Z0-1085-25) from Oracle University, validating core cloud infrastructure knowledge.",
      image: require("./assets/images/oracle-cloud.jpg"),
      imageAlt: "Oracle University",
      footerLink: []
    },
    {
      title: "OCI Generative AI Professional 2025",
      subtitle:
        "Advanced Oracle Cloud certification in Generative AI from Oracle University — part of the same OCI certification program.",
      image: require("./assets/images/oracle-genai.jpg"),
      imageAlt: "Oracle Generative AI",
      footerLink: []
    },
    {
      title: "5th Place – Mini Project Exhibition 2025",
      subtitle:
        "Recognised at the Dept. of CSE Mini Project Exhibition at Cambridge Institute of Technology, Bengaluru.",
      image: require("./assets/images/cam5th.jpg"),
      imageAlt: "CIT Exhibition",
      footerLink: []
    },
    {
      title: "Data Science & Visualization – Infosys Springboard",
      subtitle:
        "Completed the Data Science and Visualization certification from Infosys Springboard, covering statistical analysis, data wrangling, and visualization techniques.",
      image: require("./assets/images/infosys-data.jpg"),
      imageAlt: "Infosys Springboard",
      footerLink: []
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle: "Sharing knowledge about AI/ML and full-stack development.",
  displayMediumBlogs: "false",
  blogs: [],
  display: false // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji("Sharing knowledge and experiences in AI/ML"),
  talks: [],
  display: false // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "Talking about AI, ML, and technology",
  podcast: [],
  display: false // Set false to hide this section, defaults to true
};

// Resume Section
const resumeSection = {
  title: "Resume",
  subtitle: "Feel free to download my resume",

  // Please Provide with Your Podcast embeded Link
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Have a project idea or just want to say hi? My inbox is open for all.",
  number: "+91-9353141986",
  email_address: "vikasml9353@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "twitter", //Replace "twitter" with your twitter username without @
  display: false // Set false to hide this section
};

const isHireable = true; // Set false if you are not looking for a job. Also isHireable will be display as Open for opportunities: Yes/No in the GitHub footer

export {
  illustration,
  greeting,
  socialMediaLinks,
  splashScreen,
  skillsSection,
  educationInfo,
  techStack,
  workExperiences,
  openSource,
  bigProjects,
  achievementSection,
  blogSection,
  talkSection,
  podcastSection,
  contactInfo,
  twitterDetails,
  isHireable,
  resumeSection
};
