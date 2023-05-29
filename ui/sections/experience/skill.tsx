type Skill = {
    skill: string;
    description: string;
    id: string
};

type PrimarySkills = Skill[];

const bgColors = {
    bw: "bg-black dark:bg-white",
    yellow: "bg-yellow-500",
    blue: "bg-blue-600",
    red: "bg-red-500",
}


export const primarySkills: PrimarySkills = [
    {
        skill: 'Front-end Development',
        description: 'HTML, CSS, and JavaScript to create the visual components and interactive features of a website, web application, or mobile application',
        id: 'front-end',
    },
    {
        skill: 'Product Development',
        description: 'Plan, design, and build digital products such as web applications, mobile apps, or software products, ensuring that the product meets the users needs and is technically feasible.',
        id: 'product',

    },
    {
        skill: 'Integrations',
        description: 'Working with a content management system (CMS) like WordPress, Drupal, or Sanity, integrating the front-end design and functionality with the back-end content management system.',
        id: 'cms',

    },
    {
        skill: 'Web 3',
        description: 'Working with blockchain technologies, decentralized applications (dApps), and Web 3.0 to build decentralized applications, smart contracts, and other blockchain-based solutions, creating a new generation of web applications that prioritize security, transparency, and user control.',
        id: 'web3',
    },

    {
        skill: 'User Testing',
        description: 'Conduct user testing to gather feedback and insights on a website or web application, helping to identify areas for improvement and optimization.',
        id: 'testing',
    },
    {
        skill: 'Digital Marketing',
        description: 'Search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and other forms of digital advertising, to increase brand awareness and drive traffic to a website or web application.',
        id: 'marketing',
    }, {
        skill: 'Project Management',
        description: 'Search engine optimization (SEO), pay-per-click (PPC) advertising, social media marketing, email marketing, and other forms of digital advertising, to increase brand awareness and drive traffic to a website or web application.',
        id: 'marketing',
    },
]

export const companies = [
    { name: "Godaddy", logoUrl: "/images/companies/godaddy.svg" },
    { name: "AYR Wellness", logoUrl: "/images/companies/ayr.svg" },
    { name: "Boys & Girls Club", logoUrl: "/images/companies/bgc.svg" },
    { name: "Boston Celtics", logoUrl: "/images/companies/celtics.svg" },
    { name: "Curl Sponge", logoUrl: "/images/companies/curlsponge.svg" },
    { name: "Upland Software", logoUrl: "/images/companies/upland.svg" },
    { name: "CBS Radio", logoUrl: "/images/companies/cbs.svg" },
    { name: "Radio One", logoUrl: "/images/companies/radioone.svg" },
    { name: "USA Today", logoUrl: "/images/companies/usatoday.svg" },
];

