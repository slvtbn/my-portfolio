export default function Header() {
  return (
    <>
      <section id="header" className="flex justify-between pt-12">
        <h1 className="lg:text-2xl font-bold text-xl">slvtbn</h1>
        <div className="basis-3/4 lg:basis-1/2 text-md flex justify-around">
          <a href="#about-me">About me</a>
          <a href="#my-project">Projects</a>
          <a href="#technologies">Technologies</a>
        </div>
      </section>
    </>
  );
}
