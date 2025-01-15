import { FileText, Download, Briefcase, GraduationCap, ExternalLink } from 'lucide-react'
import Link from 'next/link'

const resumeData = {
  education: [
    {
      degree: "Bachelor of Computer Science Honors with Specialization in AI and Machine Learning",
      school: "Carleton University, Ottawa, ON",
      period: "September 2022 – April 2026",
      gpa: "GPA: 3.96/4",
      details: [
        "Relevant Courses: Abstract Data Types and Algorithms, C Systems Programming, C++ and Java Object-Oriented Programming, Database Management Systems, Web Applications, Discrete Structures I/II",
        "Awards and Honors: Deans' Honor List 2022-2023 and 2023-2024, Academic Excellence Entrance Scholarship"
      ]
    }
  ],
  experience: [
    {
      position: "Teaching Assistant",
      company: "Carleton University, Ottawa, ON",
      period: "January 2025 – Present",
      responsibilities: [
        "Assisted in Java Object-Oriented Programming (OOP) class as a Teaching Assistant, supporting student learning through strong knowledge of Java and core programming concepts",
        "Conducted tutorials and office hours, clarifying key OOP concepts like abstract classes and polymorphism",
        "Supported students on the class discussion board by helping debug Java code, explaining programming concepts, and offering guidance on object-oriented design principles"
      ]
    },
    {
      position: "Software Developer",
      company: "Ford Motor Company, Ottawa, ON",
      period: "September 2024 – December 2024",
      responsibilities: [
        "Automated 40+ functional tests for in-vehicle infotainment and network systems using Python and the Slash framework, boosting efficiency and increasing testing coverage by 70%",
        "Managed in-vehicle infotainment system setup and test environment configuration on a Linux Ubuntu machine, ensuring accurate connections and PC settings for outcome verification by the Stability Monitor team",
        "Conducted manual and automated tests to track system failures, applied C++ expertise to debug issues, and raised JIRA tickets for developers to address system-related problems"
      ]
    },
    {
      position: "Data Analyst",
      company: "Shared Services Canada, Ottawa, ON",
      period: "May 2024 – August 2024",
      responsibilities: [
        "Performed research and data analysis on various AI technologies, creating Power BI visualizations to support the development of a business request AI for small departmental agencies in the government",
        "Collaborated with cross-functional teams to compile and analyze AI-related insights, improve the AI chatbot interface for better user experience, and contribute to project enhancements",
        "Employed Rust and JSON to efficiently extract and process data from CSV files, and vectorized the data for integration into AI models"
      ]
    },
    {
      position: "Teaching Assistant",
      company: "Carleton University, Ottawa, ON",
      period: "September 2023 – January 2024",
      responsibilities: [
        "Leveraged Python proficiency as a Teaching Assistant in Carleton University's \"Introduction to Computer Science\" course, contributing to the success of the program",
        "Answered questions regarding complex topics and demonstrated outstanding problem solving to support 130 students",
        "Aided in grading assignments and midterms, fostering an effective learning environment with meticulous attention to detail"
      ]
    }
  ],
  projects: [
    {
      name: "Movie Locator",
      technologies: "Node.js, Express.js, JavaScript, HTML, CSS, Handlebars.js, SQLite",
      date: "April 2024",
      details: [
        "Developed a movie website with user authentication, allowing users to explore films, create accounts, and manage favorite selections using SQLite 3",
        "Crafted frontend using HTML, CSS, and Handlebars.js, ensuring intuitive navigation and appealing layout"
      ]
    },
    {
      name: "Multi-thread Ghost Simulator",
      technologies: "C, Ubuntu VM, LINUX Terminal Environment",
      date: "December 2023",
      details: [
        "Collaborated on creating a ghost-hunting simulator, developing multi-threaded segments to improve speed and functionality in a Linux environment",
        "Utilized dynamic data structures and Valgrind to optimize memory usage and resolve potential leaks",
        "Enhanced code modularity with 30+ functions, implemented ghost action logs and unit tests, and streamlined the build process with Makefiles for efficient troubleshooting"
      ]
    },
    {
      name: "Shopping Cart",
      technologies: "Java, JavaFX",
      date: "April 2023",
      details: [
        "Created a program allowing users to add items with live updates, showcasing total spending and popular items",
        "Streamlined the code by object-oriented programming skills such as inheritance, abstraction, and encapsulation",
        "Utilized various types of data structures, such as lists to organize stock items and items within the cart"
      ]
    }
  ]
}

export default function Resume() {
  return (
    <section className="py-16">
      <div className="flex justify-between items-center mb-8">
        <h2 className="text-3xl font-bold text-gray-800 dark:text-white">Resume</h2>
        <Link
          href="/resume"
          className="flex items-center bg-blue-500 hover:bg-blue-600 text-white font-bold py-3 px-6 rounded-lg transition-all duration-200 hover:scale-105"
        >
          <FileText className="mr-2" />
          View Resume
        </Link>
      </div>
      <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800 dark:text-white flex items-center">
          <GraduationCap className="mr-2" /> Education
        </h3>
        {resumeData.education.map((edu, index) => (
          <div key={index} className="mb-4">
            <h4 className="text-xl font-medium text-gray-800 dark:text-white">{edu.degree}</h4>
            <p className="text-gray-600 dark:text-gray-300">{edu.school}, {edu.period}</p>
            <p className="text-gray-600 dark:text-gray-300 font-semibold">{edu.gpa}</p>
            <ul className="list-disc list-inside mt-2">
              {edu.details.map((detail, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
        
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white flex items-center">
          <Briefcase className="mr-2" /> Experience
        </h3>
        {resumeData.experience.map((exp, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-medium text-gray-800 dark:text-white">{exp.position}</h4>
            <p className="text-gray-600 dark:text-gray-300">{exp.company}, {exp.period}</p>
            <ul className="list-disc list-inside mt-2">
              {exp.responsibilities.map((resp, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300">{resp}</li>
              ))}
            </ul>
          </div>
        ))}
        
        <h3 className="text-2xl font-semibold mt-8 mb-4 text-gray-800 dark:text-white flex items-center">
          <FileText className="mr-2" /> Projects
        </h3>
        {resumeData.projects.map((project, index) => (
          <div key={index} className="mb-6">
            <h4 className="text-xl font-medium text-gray-800 dark:text-white">{project.name}</h4>
            <p className="text-gray-600 dark:text-gray-300">{project.technologies} | {project.date}</p>
            <ul className="list-disc list-inside mt-2">
              {project.details.map((detail, idx) => (
                <li key={idx} className="text-gray-600 dark:text-gray-300">{detail}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  )
}

