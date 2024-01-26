import Button from "./Components/atoms/Button";
import CardProject from "./Components/molecules/CardProject";
import CardTechnologies from "./Components/molecules/CardTechnologies";
import dataProject from "./data/portfolio.json";
import { Link } from "react-router-dom";

export default function Dashboard() {
  return (
    <>
      <section id="hero" className="lg:pt-12">
        <div className="flex flex-wrap">
          {/* <div className=" flex bg-white"> */}
          <div className="relative flex justify-center mt-6 lg:mt-0">
            <img
              src="/img/my-photo.png"
              width="350"
              height="350"
              alt=""
              className="absolute right-10 bottom-12"
            />
            <span>
              <svg
                width="450"
                height="450"
                viewBox="0 0 200 200"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fill="#1e40af"
                  d="M49,-49.1C63.1,-34.8,73.9,-17.4,74.6,0.6C75.2,18.7,65.7,37.4,51.5,49.1C37.4,60.7,18.7,65.3,-1.6,66.9C-21.9,68.6,-43.9,67.2,-54.4,55.5C-65,43.9,-64.1,21.9,-61.2,2.9C-58.3,-16.1,-53.4,-32.3,-42.8,-46.5C-32.3,-60.8,-16.1,-73.1,0.6,-73.7C17.4,-74.4,34.8,-63.3,49,-49.1Z"
                  transform="translate(100 100) scale(1.1)"
                />
              </svg>
            </span>
          </div>
          {/* </div> */}

          <div className="w-full self-center px-4 lg:w-1/2 lg:order-first">
            <h1 className="font-semibold text-white lg:text-3xl md:text-2xll text-xl">
              Hello,{" "}
              <span className="block lg:text-4xl text-3xl text-secondary lg:pt-6 pt-2">
                Silva Anjelina Tambunan
              </span>{" "}
            </h1>
            <h2 className="text-xl pt-4 md:text-2xl lg:text-3xl;">I'm Web Developer</h2>
            <div className="flex flex-row gap-2 mt-6">
              <Button className="bg-secondary" variant="primary">
                <Link to="https://wa.me/6281344919861">
                  <span>CONTACT ME</span>
                </Link>
              </Button>
              <Button variant="primary">
                <span>DOWNLOAD CV</span>
              </Button>
            </div>
          </div>
        </div>
      </section>
      <section className="mt-16 lg:mt-2" id="about-me">
        <h1 className="text-3xl font-semibold">About me</h1>

        <div className="mt-4">
          <p className="text-xl">
            A Fresh Graduate from Institut Teknologi Nasional Malang, I am very passionate about IT
            and programming.{" "}
            <span className="text-secondary">
              I am an energetic programmer skilled in Website Development
            </span>
            . With a strong curiosity, i like to learn something new in my life, especially about IT
            and programming language
          </p>
        </div>
      </section>
      <section id="my-project" className="mt-16 lg:mt-24 ">
        <h1 className="text-3xl font-semibold mb-6">Projects</h1>

        <div className="flex flex-wrap gap-4 w-full ">
          {dataProject.map((data) => (
            <CardProject
              key={data.id}
              id={data.id}
              title={data.judul}
              img={`../../img/${data.thumbnail}`}
              technologies={data.teknologi}
            />
          ))}
        </div>
      </section>
      <section id="technologies" className=" mt-16 lg:mt-24">
        <h1 className="pb-6 text-3xl font-semibold">Technologies</h1>

        <div className="flex flex-wrap gap-6 ">
          <CardTechnologies img="../../icon/html.png" name="HTML" subtitle="2021-Present" />

          <CardTechnologies img="../../icon/css.png" name="CSS" subtitle="2021-Present" />
          <CardTechnologies img="../../icon/js.png" name="Javascript" subtitle="2021-Present" />
          <CardTechnologies img="../../icon/php.png" name="PHP" subtitle="2021-Present" />

          <CardTechnologies img="../../icon/laravel.png" name="Laravel" subtitle="2022-Present" />

          <CardTechnologies
            img="../../icon/bootstrap.png"
            name="Bootstrap"
            subtitle="2022-Present"
          />

          <CardTechnologies img="../../icon/tailwind.png" name="Tailwind" subtitle="2023" />

          <CardTechnologies img="../../icon/react.png" name="React Js" subtitle="2023" />

          <CardTechnologies img="../../icon/mysql.png" name="MY SQL" subtitle="2021-Present" />
        </div>
      </section>
    </>
  );
}
