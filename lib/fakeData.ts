import { Project } from "./interfaces";

export const fakeTimeline = [
    {
        title:"Google Code Next",
        type:"Student",
        date:"September 2020 - June 2024",
        // description:"Joined during freshman year"
        description: `
                      <li>
                        Teaching: Taught mobile development to high schoolers
                        from underrepresented communities.
                      </li>
                      <li>
                        Learning: Learned iOS, entrepreneurship, and product
                        development from Google engineers.
                      </li>
                      <li>
                        Programming: Built a portfolio website with Next.js and
                        mobile apps with iOS.
                      </li>
                      <li>
                        Hardware: Built hardware projects with the Raspberry Pi
                        including a Raspberry Pi Camera.
                      </li>
                      <li>
                        Presentations: Presented every quarterly demo day for 3
                        years to 100+ people.
                      </li>
                    `
    },
    {
        title: 'Buildspace ',
        type: "N&W S4 Builder",
        date:'August 2022',
        description:`
                      <li>
                        Teaching: Taught mobile development to high schoolers
                        from underrepresented communities.
                      </li>
                      <li>
                        Learning: Learned iOS, entrepreneurship, and product
                        development from Google engineers.
                      </li>
                      <li>
                        Programming: Built a portfolio website with Next.js and
                        mobile apps with iOS.
                      </li>
                      <li>
                        Hardware: Built hardware projects with the Raspberry Pi
                        including a Raspberry Pi Camera.
                      </li>
                      <li>
                        Presentations: Presented every quarterly demo day for 3
                        years to 100+ people.
                      </li>
                    ` 
    },
    {
        title:'Dev/Mission',
        type: "Pre-Apprentice",
        date: 'September 2023 - December 2023',
        description: `
                      <li>
                        Teamwork: Collaborated with 8 other apprentices to create a class website using HTML, CSS, and Javascript.
                      </li>
                      <li>
                        IT: Assembled and troubleshooted refurbished computers.
                      </li>
                      <li>
                        Hardware: Used the Arduino circuit board to create a video game controller. 
                      </li>
                    ` 
    },
    {
        title:'Bubbel',
        type:"Software Engineer",
        date:'June 2023 - February 2024',
        description:        
        `
                      <li>
                        Research: Weighed different tech stacks but decided to develop natively over cross-platform.
                      </li>
                      <li>
                        Communication: Convinced 25+ people to join the waitlist.
                      </li>
                      <li>
                        Marketing: Filmed and edited promotional videos for social media using Lightworks.
                      </li>
                      <li>
                        Android Development:  Developed the entire Android Interface and parts of the website.
                      </li>
                      <li>
                        Web Development: Implemented messaging and group chat creation for the Bubbel website across 6-weeks.
                      </li>
                    `
    },
    {
        title: 'Headstarter',
        type: "Fellowship",
        date: 'July 2024 - September 2024',
        description: `
                      <li>
                        Web Development: Built and Deployed 5 AI apps utilizing Next.js, Gemini API, Stripe API, Clerk API, and Firebase.
                      </li>
                      <li>
                        Mentorship: Coached by Google, Amazon, and Bloomberg engineers on Bash commands and Git.
                        development from Google engineers.
                      </li>
                      <li>
                        Leadership: Led a team of 4 to develop an AI Rate My Professor using Next.js, Gemini, and Pinecone.
                      </li>
                      
                    `
    },
{
        title: 'Space and Sattelite Systems Club',
        type: "FSW and Electrical Engineer",
        date: 'July 2024 - September 2024',
        description: `
                      <li>
                        Embedded Systems: Wrote FRAM functions to read and write pages and sectors of data using the Serial Peripheral Interface API.
                      </li>
                      <li>
                        PCB Design: Currently designing an Antenna Board using KiCad.
                      </li>
                     
                      
                    `
    },
]


export const fakeData: Project[] = [
    {
      id: 1,
      name: "Transit Track",
      description: "A bus tracking system for UC Santa Cruz",
      image: "/file.svg",
      url: "https://www.example.com",
      technologies: ["3"],
      github: "github.com/gutsyguy",
    },
    {
      id: 2,
      name: "Elgoog",
      description: "A reverse search engine developed for lancerhacks",
      image: "file.svg",
      url: "https://www.example.com",
      technologies: ["3"],
      github: "github.com/gutsyguy",
    },
    {
      id: 3,
      name: "Trashbot",
      description: "A remote controlled roomba",
      image: "file.svg",
      url: "https://www.example.com",
      technologies: ["3"],
      github: "github.com/gutsyguy",
    },
    {
      id: 4,
      name: "Netflex (WIP)",
      description: "A netflix clone",
      image: "file.svg",
      url: "https://www.example.com",
      technologies: ["3"],
      github: "github.com/gutsyguy",
    },
    {
      id: 5,
      name: "AI Rate My Professor",
      description: "An AI rate my professor",
      image: "file.svg",
      url: "https://www.example.com",
      technologies: ["3"],
      github: "github.com/gutsyguy",
    },
  ];