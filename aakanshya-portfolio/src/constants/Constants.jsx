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
import project2 from '../assets/image/project2.png'
import project3 from '../assets/image/project3.png'
export const  services =[
{
    img:<img src={serv2}/>,
    title:"DESIGN",
    description:"I create responsive, user-friendly designs that prioritize both aesthetics and functionality using tools like Figma, Adobe XD, and Tailwind CSS.",
},
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
        name:"Tailwind CSS",
        img:<img src={skill6}/>,
        
    },
    {
        name:"React",
        img:<img src={skill7}/>,
        
    },
    {
        name:"Node.js",
        img:<img src={skill5}/>,
        
    },
    {
        name:"MongoDB",
        img:<img src={skill3}/>,
        
    },
    {
        name:"MySQL",
        img:<img src={skill4}/>,
        
    }
]

export const projects = [
    {
        name:"Professional Portfolio",
        img:<img src={project2} className='h-[250px] w-[600px] object-cover'/>,
        description:"This is a description of project 1.",
        link:"https://www.natureswindowbyswastik.com/",
        link2:""
    },
    {
        name:"Interior Design",
        img:<img src={project3} className='h-[250px] w-[600px] object-cover'/>,
        description:"This is a description of project 2.",
        link:"https://interior-design-kappa-gold.vercel.app/",
          link2:""
    },
    {
        name:"Personal Portfolio",
        img:<img src={project2} className='h-[250px] w-[600px] object-cover'/>,
        description:"This is a description of project 3.",
        link:"https://example.com/project3",
        link2:""
    },
    {
        name:"Library Management System",
        img:<img src={project3} className='h-[250px] w-[600px] object-cover'/>,
        description:"This is a description of project 4.",
        link:"https://example.com/project4",
          link2:""
    }
   
]
