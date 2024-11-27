import React from "react";
import './Project.css'
import Flower from '../../assets/Flowerey.png'
import Video from '../../assets/Frame16.png'
const Project = () => {
  const data = [
    {
      image: Flower,
      title: "Blog",
      Stack: "React",
      desc: "This is a blog website.",
    },
    {
      image: Video,
      title: "Ecommerce",
      Stack: "React",
      desc: "This is a Shopping website.",
    },
    {
      image: "",
      title: "Sport",
      Stack: "React",
      desc: "This is a betting website.",
    },
    {
      image: "",
      title: "Social media",
      Stack: "React",
      desc: "This is a chat app.",
    },
  ];
  return <>
     <div className="cardContainer">
        {data.map((project, index)=>(
            <div key={index} className="card">
               <img src={project.image} alt="site" className="image"/>
               <h1>{project.title}</h1>
               <p>{project.Stack}</p>
               <p>{project.desc}</p>
            </div>
        ))}
     </div>
  </>;
};

export default Project;
