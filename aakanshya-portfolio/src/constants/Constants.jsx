import  serv2 from '../assets/image/serv2.png'
import  serv3 from '../assets/image/serv3.png'
import  serv1 from '../assets/image/serv1.png'
import skill1 from '../assets/image/html-5.png'
import skill2 from '../assets/image/css-3.png'
import skill3 from '../assets/image/icons8-mongo-db-48.png'
import skill4 from '../assets/image/icons8-mysql-24.png'
import skill5 from '../assets/image/nodejs.png'
import skill6 from '../assets/image/icons8-tailwindcss-48.png'
import skill7 from '../assets/image/react.png'
import skill8 from '../assets/image/js.png'
import skill9 from '../assets/image/express.png'
import skill10 from '../assets/image/github.png'
import project2 from '../assets/image/project2.png'
import project3 from '../assets/image/project3.png'
import project4 from '../assets/image/project4.png'

import React from 'react'
export const  services =[

{
    img:<img src={serv3}/>,
    title:"DEVELOPMENT",
    description:"I develop dynamic web applications using the MERN stack (React.js, Node.js, MongoDB, Express.js) and SQL databases, focusing on performance, scalability, and clean code architecture.",
},
{
    img:<img src={serv1}/>,
    title:"MAINTENANCE",
    description:"I provide ongoing maintenance services, including updates, bug fixes, and security patches, to ensure your web applications stay secure and perform at their best.",
}
]

export const skills = [
    {
        name:"HTML",
        img:<img src={skill1}/>,
       
    },
    {
        name:"CSS",
        img:<img src={skill2}/>,
        
    },
    {
        name:"JavaScript",
        img:<img src={skill8}/>,
        
    },
      {
        name:"React",
        img:<img src={skill7}/>,
        
    },
    {
        name:"Tailwind CSS",
        img:<img src={skill6}/>,
        
    },
  
    {
        name:"Node.js",
        img:<img src={skill5}/>,
    
    },
    {
        name:"Express.js",
        img:<img src={skill9}/>,
        
    },
    {
        name:"MongoDB",
        img:<img src={skill3}/>,
        
    },
    {
        name:"MySQL",
        img:<img src={skill4}/>,
        
    },
   
    
]

export const projects = [
    {
        name:"Professional Portfolio",
        img:<img src={project2} className='h-[400px] w-[800px] object-cover'/>,
        description:"Nature’s Window is a full-stack web application designed to bring users closer to the beauty and serenity of nature. Built using the MERN stack, the project offers a digital platform where users can explore nature-themed content, view scenic imagery, read about flora and fauna, and possibly share their own nature experiences.",
        link:"https://www.natureswindowbyswastik.com/",
        link2:"https://github.com/Aakanshya1/Nature-s_Window"
    },
    {
        name:"Interior Design",
        img:<img src={project3} className='h-[400px] w-[800px] object-cover'/>,
        description:"Interior Design is a responsive webste buit using React.js and Tailwind CSS.The goal was to sharpen frontend development skills while experimenting with layout structures, hover effects, and component-based architecture.",
        link:"https://interior-design-kappa-gold.vercel.app/",
          link2:"https://github.com/Aakanshya1/Interior-design"
    },
    {
        name:"Library Management System",
        img:<img src={project4} className='h-[400px] w-[800px] object-cover'/>,
        description:"The Library Management System is a full-stack web application designed to streamline book management, user access, and resource allocation in a digital library environment. This project includes a robust role-based access control system with three distinct roles: User, Librarian, and Admin, each having specific privileges.",
        link:"https://mern-library-management-system.vercel.app/login",
        link2:"https://github.com/Aakanshya1/mern-library-management-system"
    }
   
]
