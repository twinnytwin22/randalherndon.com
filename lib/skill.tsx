type Skill = {
    skill: string;
    description: string;
  };
  
  type PrimarySkills = Skill[];
  
  const bgColors = [ 
    {
    bw: "bg-black dark:bg-white",
    yellow: "bg-yellow-500",
    blue: "bg-blue-600",
    red: "bg-red-500",
 }
];

export const primarySkills: PrimarySkills = [
    {
        skill: 'Front-end Development',
        description:'HTML, CSS, and JavaScript to create the visual components and interactive features of a website, web application, or mobile application',
    },
    {
        skill: 'Product Development',
        description:'Plan, design, and build digital products such as web applications, mobile apps, or software products, ensuring that the product meets the users needs and is technically feasible.',        
    },
    {
        skill: 'CMS Integration',
        description:'Working with a content management system (CMS) like WordPress, Drupal, or Sanity, integrating the front-end design and functionality with the back-end content management system.',        
    },
    {
        skill: 'Web 3 Development',
        description:'Working with blockchain technologies, decentralized applications (dApps), and Web 3.0 to build decentralized applications, smart contracts, and other blockchain-based solutions, creating a new generation of web applications that prioritize security, transparency, and user control.',
    },
    {
        skill: 'Technical support and maintenance',
        description:'Provide ongoing technical support and maintenance for a website or web application, ensuring that it continues to run smoothly and stay up-to-date with the latest web technologies.',
    },
    {
        skill: 'User Testing',
        description:'Conduct user testing to gather feedback and insights on a website or web application, helping to identify areas for improvement and optimization.',
    },
    {
        skill: 'Digital Marketing',
        description:'Search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and other forms of digital advertising, to increase brand awareness and drive traffic to a website or web application.',
    },
]