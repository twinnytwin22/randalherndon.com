type Skill = {
    skill: string;
    bgColor:string;
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
        bgColor: bgColors[0].bw,

    },
    {
        skill: 'Product Development',
        description:'This is product',

        bgColor: bgColors[0].yellow,

        
    },
    {
        skill: 'Graphic Design',
        bgColor: bgColors[0].blue,
        description:'This is gfx',


        
    },
    {
        skill: 'Web 3 Development',
        bgColor: bgColors[0].red,
        description:'This is web3',


        
    },
]