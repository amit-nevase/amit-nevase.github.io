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
  username: "Amit Nevase",
  title: "Hi all, I'm Amit",
  subTitle: emoji(
    "A passionate Android Application Developer 🚀 having an more than 6 years experience of building Android Mobile applications."
  ),
  resumeLink:
    "https://drive.google.com/file/d/18f5ouR4niIZNryD_x1REQHHpoEpcO0fB/view?usp=sharing", // Set to empty to hide the button
  displayGreeting: true // Set false to hide this section, defaults to true
};

// Social Media Links

const socialMediaLinks = {
  // github: "https://github.com/saadpasta",
  linkedin: "https://www.linkedin.com/in/amit-newase-643204a2/",
  gmail: "ahoamit@gmail.com",
  // gitlab: "https://gitlab.com/saadpasta",
  // facebook: "https://www.facebook.com/saad.pasta7",
  // medium: "https://medium.com/@saadpasta",
  // stackoverflow: "https://stackoverflow.com/users/10422806/saad-pasta",
  // Instagram, Twitter and Kaggle are also supported in the links!
  // To customize icons and social links, tweak src/components/SocialMedia
  display: true // Set true to display this section, defaults to false
};

// Skills Section

const skillsSection = {
  title: "What I do",
  subTitle: "Motivated and Talented android developer with extensive experience of 6 years in developing and maintenance in Android applications in a variety of areas like e-commerce, banking domain to government owned projects.",
  skills: [
    emoji(
      "⚡ Highly skilled in OOP's based software and framework design and coding."
    ),
    emoji(
      "⚡ Very Good understanding of Android framework and Advanced knowledge of Android SDK."
    ),
    emoji("⚡ Worked on different architectural approaches for project development like MVVM, MVC and MVP"),
    emoji(
      "⚡ Familiar with third party library integration like Retrofit, Realm, RxJava, FCM,Firebase, etc and Android jetpack components."
    ),
    emoji(
      "⚡ hands on experience in CI/CD (Bitbucket Pipelines, Bitrise, Firebase)"
    )
  ],

  /* Make Sure to include correct Font Awesome Classname to view your icon
https://fontawesome.com/icons?d=gallery */

  softwareSkills: [
    {
      skillName: "Android",
      fontAwesomeClassname: "fab fa-android"
    },
    {
      skillName: "Java",
      fontAwesomeClassname: "fab fa-java"
    },
    {
      skillName: "Kotlin",
      fontAwesomeClassname: "fab fa-kaggle"
    },
    {
      skillName: "C",
      fontAwesomeClassname: "fas fa-copyright"
    },
     {
      skillName: "firebase",
      fontAwesomeClassname: "fas fa-fire"
    },
    {
      skillName: "sql-database",
      fontAwesomeClassname: "fas fa-database"
    },
    {
      skillName: "aws",
      fontAwesomeClassname: "fab fa-aws"
    },{
      skillName: "jira",
      fontAwesomeClassname: "fab fa-jira"
    },{
      skillName: "confluence",
      fontAwesomeClassname: "fab fa-confluence"
    }
    ],
  display: true // Set false to hide this section, defaults to true
};

// Education Section

const educationInfo = {
  display: true, // Set false to hide this section, defaults to true
  schools: [
    {
      schoolName: "Karmaveer bhaurao patil College of Engineering, Satara",
      logo: require("./assets/images/kbp.png"),
      subHeader: "Bachelor of Engineering: Computer Science",
      duration: " 2011 - 2015",
      desc: "Participated in annual event as event co-ordinator.",
      // descBullets: [
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit",
      //   "Lorem ipsum dolor sit amet, consectetur adipiscing elit"
      // ]
    },
    {
      schoolName: "Sunbeam institute of Information Technology, Pune",
      logo: require("./assets/images/sunbeam.png"),
      subHeader: "Post graduate diploma in Mobile Computing",
      duration: "2015 - 2016",
      desc: "Took courses about Software Engineering, Mobile Application development and Mobile Operating system and security",
      // descBullets: ["Lorem ipsum dolor sit amet, consectetur adipiscing elit"]
    }
  ]
};

// Your top 3 proficient stacks/tech experience

const techStack = {
  viewSkillBars: true, //Set it to true to show Proficiency Section
  experience: [
    {
      Stack: "Kotlin", //Insert stack or technology you have experience in
      progressPercentage: "70%" //Insert relative proficiency in percentage
    },
    {
      Stack: "Java",
      progressPercentage: "70%"
    },
    {
      Stack: "CI/CD: Fastlane, Bitrise Pipelines, Bitrise, Firebase",
      progressPercentage: "60%"
    },
    {
      Stack: "Git, Github, Gitlab, BitBucket",
      progressPercentage: "70%"
    },
    {
      Stack: "Slack, JIRA, Trello, Pivotal",
      progressPercentage: "70%"
    },
    {
      Stack: "RXjava, RxAndroid, coroutines",
      progressPercentage: "60%"
    },
    {
      Stack: "Flutter, Dart",
      progressPercentage: "30%"
    }
  ],
  displayCodersrank: false // Set true to display codersrank badges section need to changes your username in src/containers/skillProgress/skillProgress.js:17:62, defaults to false
};

// Work experience section

const workExperiences = {
  display: true, //Set it to true to show workExperiences Section
  experience: [
    {
      role: "Senior Software Engineer",
      company: "Josh Software",
      companylogo: require("./assets/images/josh.png"),
      date: "January 2019 – Present",
      descBullets: ["Working as a consultant for Circles.Life multinational mobile virtual network operator based in Singapore.",
        "Worked on Banyan's Security Domain App which provides a secure virtual private network.",
        "Helped to social App UskiMuski which help's to reconnect families and friends through fun games and rewards.",
        "Worked on a variety of projects including organisation's internal products like SimplySmart and QuickInsure",
      ]
    },
    {
      role: "Software Engineer",
      company: "Neosoft Technologies",
      companylogo: require("./assets/images/neosoft.png"),
      date: "April 2016 – December 2018",
      // desc: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
      descBullets: [
        "Worked on a variety of projects as a software developer including the food delivery app Eat clean me located in Dubai and the Organisational product TaskDo for the company",
        "Was facing the client as the medium of communication to understand the requirement and collaborate with the client."
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
  title: "Projects",
  // subtitle: "SOME STARTUPS AND COMPANIES THAT I HELPED TO CREATE THEIR TECH",
  projects: [
    {
      image: require("./assets/images/circles.jpeg"),
      projectName: "Circles.Life",
      projectDesc: "Circles.Life is the first digital telco in Singapore that promotes giving back power to customers. a mobile app helps them build their own plans, so they only pay for what they want.",
      descBullets: [
        "Worked on features like a family plan which shares the plan to save Project Name Circles-Life Project Type Mobile Project Category Digital telco more within the family.",
        "Worked to release and mainetain feature application for KDDI jp and yet working to add many more features, functionality and optimization in it."
      ],
      footerLink: [
        {
          name: "🔗",
          url: "https://play.google.com/store/apps/details?id=com.circles.selfcare"
        }
        //  you can add extra buttons here.
      ]
    },
    {
      image: require("./assets/images/banyan.webp"),
      projectName: "Banyan Security",
      projectDesc: "The Banyan Secure Remote Access App enables you to securely access your corporate applications from any network, using any device, without a VPN.",
      descBullets: [
        "Using Banyan app users can register his/her device to an Organization from which he/she consumes  private services.",
        "To make sure of device identity we installed a mobile config file via an app that holds the private key of the device.(Added certificate installation mechanism)",
        "App show trust scores based on device configuration."
      ],
      footerLink: [
        {
          name: "🔗",
          url: "https://play.google.com/store/apps/details?id=com.banyanops.mobile"
        }
      ]
    },
    {
      image: require("./assets/images/uskimuski.webp"),
      projectName: "Uskimuski",
      projectDesc: "a magical world of fun, excitement, and learning for kids. Uskimuski is a platform that enables kids to learn about life and the world at large, through enchanting stories, exciting games & fun activities, and that too in the company of their family members!",
      descBullets: [
        "Helped to fill The application's vision which is to build strong communities that are deeply engaged",
        "Added some exciting features like story telling ,plays and puzzles",
        "Also added chat feature for more and better engagement "
      ],
      footerLink: [
        {
          name: "🔗",
          url: "https://play.google.com/store/apps/details?id=com.glluu"
        }
      ]
    },
    {
      image: require("./assets/images/eatcleanme.webp"),
      projectName: "Eatcleanme",
      projectDesc: "Eat Clean is an online ordering platform for healthy meals in Dubai. We understand the importance of eating healthy and are dedicated to offer the best healthy meal options available in Dubai under one platform. below are the some features available inside the application.",
      descBullets: [
        "Choice of Payments: Cash on Delivery, Credit/Debit Card",
        "Search: Look up products, categories using search",
        "Easy Find: Find what you want with the sort and multi-filter functions and Never Miss an Offer: Get access to exclusive app-only",
        "Personalized Alerts: Get notifications on offers and price drops and also Wishlist: Add products to your Wishlist with just one tap and, many more"
      ],
      footerLink: [
        {
          name: "🔗",
          url: "https://play.google.com/store/apps/details?id=com.eatcleanme.app"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Achievement Section
// Include certificates, talks etc

const achievementSection = {
  title: emoji("Achievements And Certifications 🏆 "),
  subtitle:
    "Achievements, Award Letters and Some Cool Stuff that I have done !",

  achievementsCards: [
    {
      title: "Awarded as Performer of the Month by Neosoft Technologies International",
      subtitle:
        "",
      image: require("./assets/images/eom.jpeg"),
      footerLink: [
        // {
        //   name: "Certification",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dYkVvNjdNWjNybWJrbndFSHpNY2NFV1p4YmU0/view?usp=sharing"
        // },
        // {
        //   name: "Award Letter",
        //   url: "https://drive.google.com/file/d/0B7kazrtMwm5dekxBTW5hQkg2WXUyR3QzQmR0VERiLXlGRVdF/view?usp=sharing"
        // },
        // {
        //   name: "Google Code-in Blog",
        //   url: "https://opensource.googleblog.com/2019/01/google-code-in-2018-winners.html"
        // }
      ]
    },
    {
      title: "Google Firebase Event",
      subtitle:
        "Captured 3rd rank in hackthone organised by Google team in firebase events ",
      image: require("./assets/images/fv.png"),
      footerLink: [
        {
          name: "Award and Appreciation",
          url: "https://drive.google.com/file/d/1KsCGMO5enroODkSwr4exTyEtYD_mI5Qh/view?usp=sharing"
        }
      ]
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Blogs Section

const blogSection = {
  title: "Blogs",
  subtitle:
    "With Love for Developing cool stuff, I love to write and teach others what I have learnt.",
  displayMediumBlogs: "true", // Set true to display fetched medium blogs instead of hardcoded ones
  blogs: [
    {
      url: "https://blog.joshsoftware.com/2022/03/30/jetpack-compose-game-changer-for-android-ui/",
      title: "Jetpack Compose is Here to Revolutionise How You Code for Android UI",
      description:
        "what’s cool about Jetpack Compose?  well..!!!  It’s cool that it basically simplifies and accelerates the way we write Android UI"
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Talks Sections

const talkSection = {
  title: "TALKS",
  subtitle: emoji(
    "I LOVE TO SHARE MY LIMITED KNOWLEDGE AND GET A SPEAKER BADGE 😅"
  ),

  talks: [
    {
      title: "a Talk about firebase new features.",
      subtitle: "Josh talks internal",
      slides_url: "https://docs.google.com/presentation/d/1k0TVtBSOO9Bvuo7Z6hl5I4_QL4nXwRAR/edit?usp=sharing&ouid=108020389478005911169&rtpof=true&sd=true",
      event_url: ""
    }
  ],
  display: true // Set false to hide this section, defaults to true
};

// Podcast Section

const podcastSection = {
  title: emoji("Podcast 🎙️"),
  subtitle: "I LOVE TO TALK ABOUT MYSELF AND TECHNOLOGY",

  // Please Provide with Your Podcast embeded Link
  podcast: [
    "https://anchor.fm/codevcast/embed/episodes/DevStory---Saad-Pasta-from-Karachi--Pakistan-e9givv/a-a15itvo"
  ],
  display: false // Set false to hide this section, defaults to true
};

const contactInfo = {
  title: emoji("Contact Me ☎️"),
  subtitle:
    "Discuss a project or just want to say hi? My Inbox is open for all.",
  number: "+91-9762036237",
  email_address: "ahoamit@gmail.com"
};

// Twitter Section

const twitterDetails = {
  userName: "amit_nevase", //Replace "twitter" with your twitter username without @
  display: true // Set true to display this section, defaults to false
};

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
  twitterDetails
};
