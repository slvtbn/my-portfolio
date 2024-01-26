import { useParams } from "react-router-dom";
import dataProject from "../data/portfolio.json";
import ImageSlider from "../Components/molecules/ImageSlider";

export default function ProjectDetails() {
  const { id } = useParams();
  const projectId = parseInt(id, 10);
  const project = dataProject.find((data) => data.id === projectId);

  if (!project) {
    return <div>Project Not Found!</div>;
  }
  return (
    <>
      <div className="w-[80%] mt-24 m-auto">
        <div>
          <h1 className="text-2xl font-bold uppercase">{project.judul}</h1>
          <div className="flex flex-wrap gap-2 mt-5 mb-10">
            {project.teknologi.map((tech, index) => (
              <p
                className="bg-white text-black text-xs font-semibold rounded-full px-1"
                key={index}
              >
                {tech}
              </p>
            ))}
          </div>
          <img src={`../../img/${project.thumbnail}`} alt="" />
          <p className="mt-10 text-justify mb-10">{project.deskripsi}</p>
          <ImageSlider images={project.gambar} />
        </div>
      </div>
    </>
  );
}
