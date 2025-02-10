'use client'
import { useState } from 'react';

const skills = [
  {
    category: "Web Development",
    icon: "💻",
    skills: [
      { name: "React.js", proficiency: 90 },
      { name: "Next.js", proficiency: 85 },
      { name: "JavaScript", proficiency: 95 },
      { name: "Tailwind CSS", proficiency: 90 },
   //   { name: "Supabase", proficiency: 80 },
     // { name: "Umbraco", proficiency: 75 },
      { name: "SEO Optimization", proficiency: 85 },
      { name: "Performance Optimization", proficiency: 88 },
    ],
  },
  {
    category: "Branding and Marketing",
    icon: "🎯",
    skills: [
      { name: "SEO & SEM", proficiency: 85 },
      { name: "Email Marketing", proficiency: 80 },
      { name: "Social Media Strategy", proficiency: 88 },
      { name: "Graphic Design", proficiency: 75 },
      { name: "UX/UI Design", proficiency: 85 },
      { name: "Campaign Management", proficiency: 82 },
    ],
  },
  {
    category: "Product Management",
    icon: "📊",
    skills: [
      { name: "Agile Development", proficiency: 90 },
      { name: "Project Management", proficiency: 88 },
      { name: "Stakeholder Communication", proficiency: 85 },
      { name: "Data Analytics", proficiency: 82 },
      { name: "Market Research", proficiency: 80 },
      { name: "Go-To-Market Strategy", proficiency: 85 },
    ],
  },
];

export default function SkillsList() {
  return (
    <div id="skills" className="section border border-slate-300 dark:border-gray-800 bg-white dark:bg-black text-black dark:text-white rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition ease-out duration-[160ms] w-full mb-8">
      <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="SKILLS">
        Skills
      </h6>
      <h2 className="text-3xl lg:text-4xl font-poppins font-semibold mb-8 lg:mb-10 dark:text-white">
        What I'm Great At
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skills.map((section) => (
          <div key={section.category} className="group">
            <div className="bg-white dark:bg-gray-950 rounded p-6 transition-all duration-300 hover:scale-[1.02] hover:shadow-xl border border-gray-200 dark:border-gray-800">
              <div className="flex items-center gap-3 mb-6">
                <span className="text-2xl hidden">{section.icon}</span>
                <h3 className="text-xl font-bold ">
                  {section.category}
                </h3>
              </div>
              <div className="space-y-4">
                {section.skills.map((skill) => (
                  <div key={skill.name} className="relative">
                    <div className="flex justify-between mb-1">
                      <span className="font-mono text-sm text-gray-700 dark:text-gray-300">
                        {skill.name}
                      </span>
                      <span className="font-mono text-sm text-gray-500">
                        {skill.proficiency}%
                      </span>
                    </div>
                    <div className="h-2 bg-slate-500 dark:bg-gray-700 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-slate-700 dark:from-blue-500 to-indigo-500 transition-all duration-500 group-hover:from-blue-500 group-hover:to-indigo-500"
                        style={{ width: `${skill.proficiency}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

interface WorkExperience {
  company: string;
  role: string;
  duration: string;
  location: string;
  achievements: string[];
  metrics?: string[];
  logo?: string;
}

const experiences: WorkExperience[] = [
  {
    company: "Arizona Science Center",
    role: "Website Manager",
    duration: "November 2023 - Present",
    location: "Phoenix, Arizona",
    achievements: [
      "Led website launch improving user engagement",
      "Engineered internal software solutions with Tessitura API",
      "Optimized website management processes",
      "Provided strategic weekly reports to senior leadership",
      "Managed and optimized CMS platforms, hosting, and databases"
    ],
    metrics: ["Improved site performance", "Enhanced user engagement"],
    logo: "/logos/asc.svg"
  },
  {
    company: "CRIB Network",
    role: "Software Engineer",
    duration: "January 2022 - Present",
    location: "Greater Phoenix Area",
    achievements: [
      "Developed profitable websites and apps generating $15M+ in revenue",
      "Managed digital strategies for multiple multi-million-dollar companies",
      "Led full-stack development and UX optimization"
    ],
    metrics: ["$15M+ revenue impact", "Multi-industry digital solutions"],
    logo: "/logos/crib.svg"
  },
  {
    company: "Ayr Wellness Inc.",
    role: "Digital Marketing Manager",
    duration: "June 2021 - February 2022",
    location: "Tempe, Arizona",
    achievements: [
      "Managed marketing for multiple brands and 3 retail locations",
      "Contributed to $3M+ in monthly gross revenue",
      "Reduced yearly marketing costs by $120K",
      "Led web design, branding, and packaging strategies"
    ],
    metrics: ["$3M+ monthly revenue", "$120K+ cost savings"],
    logo: "/logos/ayr.svg"
  },
  {
    company: "Ayr Wellness Inc.",
    role: "Marketing Specialist",
    duration: "October 2019 - June 2021",
    location: "Chandler, Arizona",
    achievements: [
      "Designed and managed websites for multiple cannabis brands",
      "Created print media, email campaigns, and billboards",
      "Developed brand identities and in-store marketing materials"
    ],
    metrics: ["Increased brand awareness", "Boosted digital engagement"],
    logo: "/logos/ayr.svg"
  },
  {
    company: "GoDaddy",
    role: "Product Specialist",
    duration: "July 2018 - October 2019",
    location: "Phoenix, Arizona",
    achievements: [
      "Managed GoDaddy product portfolios for customer accounts",
      "Generated $20K+ in monthly sales through expert consulting",
      "Tested new sales flows and product releases"
    ],
    metrics: ["$20K+ in sales per month"],
    logo: "/logos/godaddy.svg"
  },
  {
    company: "Boys & Girls Clubs of America",
    role: "Digital Art Instructor",
    duration: "January 2017 - May 2018",
    location: "St. Louis County, Missouri",
    achievements: [
      "Taught digital art and design to youth",
      "Developed curriculum for creative technology programs"
    ],
    metrics: ["Empowered young creators"],
    logo: "/logos/bgca.svg"
  },
  {
    company: "Second Street",
    role: "Product Specialist",
    duration: "December 2014 - June 2016",
    location: "Saint Louis, Missouri",
    achievements: [
      "Provided support for 3,000+ media companies (TV, Radio, Newspaper)",
      "Helped partners grow email databases and sponsorship revenue",
      "Advised on online promotions and engagement strategies"
    ],
    metrics: ["Supported 3,000+ media partners"],
    logo: "/logos/secondstreet.svg"
  },
  {
    company: "CBS Radio",
    role: "Promotions Team Member",
    duration: "January 2014 - September 2015",
    location: "Saint Louis, Missouri",
    achievements: [
      "Represented KMOX, Fresh 102.5, and Y98 at events",
      "Managed social media updates and live promotions",
      "Assisted in event execution and branding"
    ],
    metrics: ["Increased audience engagement"],
    logo: "/logos/cbsradio.svg"
  }
];



export function WorkExperience() {
  const [showAll, setShowAll] = useState(false);

  const displayedExperiences = showAll ? experiences : experiences.slice(0, 3);

  return (
    <div className="section border border-slate-300 dark:border-gray-800 bg-white dark:bg-black rounded-lg px-6 py-8 md:px-8 md:py-10 lg:p-12 shadow-sectionBoxShadow hover:shadow-sectionBoxShadowHover transition-all duration-[160ms] w-full mb-8">
      <h6 className="font-mono font-medium uppercase text-sm tracking-wider relative pt-4 mb-5 dark:text-white before:content-['//'] before:pr-2 after:content-[attr(data-backdrop-text)] after:absolute after:top-0 after:left-0 after:font-poppins after:font-bold after:uppercase after:text-4xl after:opacity-15" data-backdrop-text="EXPERIENCE">
        Experience
      </h6>
      
      <div className="relative">
        {displayedExperiences.map((exp, index) => (
          <div key={exp.company + index} className="group relative pl-8 pb-12 border-l-2 border-slate-300 dark:border-gray-700 last:border-l-0">
            <div className="absolute -left-[9px] top-0 h-5 w-5 rounded-full bg-white dark:bg-gray-900 border-2 border-slate-500 dark:border-blue-500 group-hover:border-blue-500 group-hover:scale-110 transition-all duration-300" />
            
            <div className="bg-white dark:bg-gray-950 rounded-lg p-6 border border-gray-200 dark:border-gray-800 group-hover:shadow-xl transition-all duration-300 hover:scale-[1.02]">
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white">{exp.role}</h3>
                  <p className="text-slate-600 dark:text-slate-400 font-mono">{exp.company}</p>
                </div>
                <span className="text-sm text-slate-500 font-mono">{exp.duration}</span>
              </div>
              
              <ul className="space-y-2">
                {exp.achievements.map((achievement, i) => (
                  <li key={i} className="flex items-start">
                    <span className="mr-2 text-blue-500">▹</span>
                    <span className="text-slate-700 dark:text-slate-300">{achievement}</span>
                  </li>
                ))}
              </ul>
              
              {exp.metrics && (
                <div className="mt-4 flex gap-2">
                  {exp.metrics.map((metric, i) => (
                    <span key={i} className="font-mono px-3 py-1 rounded-full text-xs bg-slate-100 dark:bg-gray-800 text-slate-700 dark:text-slate-300">
                      {metric}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
      
      {!showAll && (
        <div className="flex justify-center mt-8">
          <button
            onClick={() => setShowAll(true)}
            className="px-4 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-600 transition-all duration-300 text-center w-1/2"
          >
            Show All
          </button>
        </div>
      )}
    </div>
  );
}