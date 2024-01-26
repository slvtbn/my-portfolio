import React, { useState } from "react";
import { Link } from "react-router-dom";

export default function CardProject({ title, img, technologies, id }) {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div
      className="w-full lg:w-[320px] border border-secondary text-white rounded-lg p-3 relative-group"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* <Link to={`/project-details/${id}`}> */}
      <div className="relative group">
        <img src={img} alt="" className="w-full rounded-lg" />
        {isHovered && (
          <div className="absolute inset-0 flex flex-col items-center justify-center bg-black bg-opacity-90 opacity-0 hover:opacity-100 transition-opacity duration-300 rounded-lg">
            <Link to={`/project-details/${id}`}>View More</Link>
          </div>
        )}
      </div>
      <h3 className="font-semibold text-lg text-white mt-5">{title}</h3>
      <div className="flex flex-wrap gap-2 mt-5">
        {technologies.map((tech, index) => (
          <p className="bg-white text-black text-xs font-semibold rounded-full px-1" key={index}>
            {tech}
          </p>
        ))}
      </div>
      {/* </Link> */}
    </div>
  );
}
