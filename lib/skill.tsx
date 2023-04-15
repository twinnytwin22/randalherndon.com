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
        description:'This is front end',

    },
    {
        skill: 'Product Development',
        description:'This is product',


        
    },
    {
        skill: 'Graphic Design',
        description:'This is gfx',


        
    },
    {
        skill: 'Web 3 Development',
        description:'This is web3',


        
    },
    {
        skill: 'Digital Marketing',
        description:'This is web3',


        
    },
]